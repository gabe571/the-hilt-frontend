import React from 'react';
import './App.css';
import Form from './Components/Form';
import Login from './Components/Login'
import GuildsContainer from './Components/GuildsContainer'
import {Route, Switch, Link, NavLink, withRouter} from 'react-router-dom'



class App extends React.Component {
  state={
    user:{
      id:0,
      name:''
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

renderGuilds = () => <GuildsContainer  guilds={this.state.guilds} delete={this.deleteHandler} edit={this.editHandler}/>

renderForm = () =>  <Form guilds={this.handleSubmit} />

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

renderLoginPage = () => <Login handleLogin={this.handleLogin} />

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
          <NavLink to='/guildscontainer'>Active Guilds</NavLink>
         </li>
         <li>
          <NavLink to='/login'>Login</NavLink>
         </li>
       </ul>
      </header>

        <Switch>
       <Route path='/login' render={this.renderLoginPage}/>
        <Route path='/form' render={this.renderForm}/>
        <Route path='/guildscontainer' render={this.renderGuilds} />
        </Switch>

        </div>
    );
  }
}

export default withRouter(App);
