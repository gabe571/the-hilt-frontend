import React from 'react';
import './App.css';
import Form from './Components/Form';
import AppForm from './Components/AppForm'
import Login from './Components/Login'
import ApplicationsContainer from './Components/ApplicationsContainer'
import GuildsContainer from './Components/GuildsContainer'
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'



class App extends React.Component {
  state={
    user:{
      id:0,
      name:''
    },
    application:{
      user_id:0,
      guild_id:0,
      content:''
    },
    guilds:[],
    realm:'',
    faction:'',
    img_url: '',
    description:''
  }

  componentDidMount(){
    fetch('http://localhost:3000/guilds')
    .then(res => res.json())
    .then(guilds => 
      {this.setState({ guilds })})
  }
  
  fetchApplications(){
    fetch('http://localhost:3000/applications')
    .then(res => res.json())
    .then(applications => 
      {this.setState({ applications })})
  }
  


renderGuilds = () => <GuildsContainer  guilds={this.state.guilds} delete={this.deleteHandler} edit={this.editHandler}/>

renderApplications = () => <ApplicationsContainer applications={this.state.applications}/>

renderForm = () =>  <Form guilds={this.handleSubmit} />

renderAppForm = () =>  <AppForm applications={this.handleAppSubmit} />

handleAppSubmit = (content,user_id, guild_id) => {
  const Data = {content, user_id, guild_id};
  fetch('http://localhost:3000/applications', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Data),
  })
 .then(res => res.json())
 .then(console.log)
 }
 
handleLogin = (e, userInfo) =>{
  console.log(userInfo)
  e.preventDefault()

  fetch('http://localhost:3000/login',{
   method:"POST",
   headers:{
     'Content-Type':'application/json'
   },
   body:JSON.stringify(userInfo)
 })
 .then(res => res.json())
 .then(json => {
   if(!json.error){
     this.setState({user:{id:json.id, user:json.name}, allGuild:json.GuildsContainer}, () => {
       this.props.history.push('/guildscontainer')
     })
   }else {
     alert(json.error)
   }
 })
 .catch(err => console.log(err))
}

renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} />

renderSignUpPage = () =>  <Login handleLoginOrSignup={this.handleSignup}/>

handleSubmit = (name, realm, faction, description, img_url) => {
 const requestedData = {name, realm, faction, description, img_url};
 fetch('http://localhost:3000/guilds', {
   method: 'POST',
   headers: { 
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(requestedData),
 })
.then(res => res.json())
}

handleSignup = (e,userInfo) => {
  e.preventDefault()
   fetch('http://localhost:3000/users',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(userInfo)
   })
   .then(res => res.json())
   .then(console.log)
 }
editHandler = (e, guild) => {
  console.log(guild)
  e.preventDefault()
  const Data = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ guild })
  };
  fetch(`http://localhost:3000/guilds/${guild.id}`, Data)
  .then(res => res.json())
  .then(console.log) 
 }
 
deleteHandler = (guild) => {
  console.log(guild)
fetch(`http://localhost:3000/guilds/${guild.id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))

}
  render() {
    console.log(this.state)
    return (
      <div>
      <header>
        <h3>THE HILT</h3>
       <ul>
         <li>
          <NavLink to='/form'>Form</NavLink>
         </li>
         <li>
          <NavLink to='/appform'>Apply Here!</NavLink>
         </li>
         <li>
          <NavLink to='/guildscontainer'>Active Guilds</NavLink>
         </li>
         <li>
          <NavLink to='/login'>Login</NavLink>
         </li>
         <li>
          <NavLink to='/signup'>Sign Up!</NavLink>
         </li>
       </ul>
      </header>

        <Switch>
       <Route path='/login' render={this.renderLoginPage}/>
       <Route path='/signup' render={this.renderSignUpPage}/>
       <Route path='/appform' render={this.renderAppForm}/>
        <Route path='/form' render={this.renderForm}/>
        <Route path='/guildscontainer' render={this.renderGuilds} />
        <Route path='/applicationscontainer' render={this.renderApplications} />
        <Route path='/applications' applications={this.applications}/>
        </Switch>

        </div>
    );
  }
}

export default withRouter(App);
