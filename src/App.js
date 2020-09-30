import React from 'react';
import './App.css';
import Guild from './Components/Guild'
import Form from './Components/Form';
import Login from './Components/Login'
import GuildsContainer from './Components/GuildsContainer'
import {Route, Switch, Link, NavLink} from 'react-router-dom'



class App extends React.Component {
  state = {
    guilds: [],
    realm: '',
    faction: '',
    img_url: '',
    description: ''

  };
  componentDidMount(){
  fetch('http://localhost:3000/users')
  .then(res => res.json())
  .then(users => {this.setState({ users })})
  }

componentDidMount(){
  fetch('http://localhost:3000/guilds')
  .then(res => res.json())
  .then(guilds => 
    {this.setState({ guilds })})
}

renderGuilds = () => <GuildsContainer  guilds={this.state.guilds} delete={this.deleteHandler} edit={this.editHandler}/>

renderForm = () =>  <Form guilds={this.handleSubmit} />

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
       <Route path='/login' component={Login}/>
        <Route path='/form' render={this.renderForm}/>
        <Route path='/guildscontainer' render={this.renderGuilds} />
        </Switch>

        </div>
    );
  }
}

export default App;
