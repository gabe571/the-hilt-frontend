import React from 'react';
import './App.css';
import Form from './Components/Form';
import GuildsContainer from './Components/GuildsContainer'


class App extends React.Component {
  state = {
    guilds: [],
  };

componentDidMount(){
  fetch('http://localhost:3000/guilds')
  .then(res => res.json())
  .then(guilds => {this.setState({ guilds })})
}
handleSubmit = (name, realm, faction, description, img_url) => {
 const requestedData = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json'},
   body: JSON.stringify({name: name, realm: realm, faction: faction, description: description, img_url: img_url})
 };
 fetch('http://localhost:3000/guilds', requestedData)
 .then(res => res.json())
 .then(console.log) 
}

editHandler = (guild) => {
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
    console.log(this.state.guilds)
    return (
      <div>
        <GuildsContainer guilds={this.state.guilds} delete={this.deleteHandler} edit={this.editHandler} />
        <Form guilds={this.handleSubmit} />
       {/* <Guild guilds={this.state.guilds} delete={this.deleteHandler}/> */}
      </div>
    );
  }
}

export default App;
