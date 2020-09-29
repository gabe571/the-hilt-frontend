import React from 'react';
import Guild from './Components/Guild'
import Form from './Components/Form';
import GuildsContainer from './Components/GuildsContainer'



class App extends React.Component {
  state = {
    guilds: [],
    realm: '',
    faction: '',
    img_url: '',
    description: ''

  };

componentDidMount(){
  fetch('http://localhost:3000/guilds')
  .then(res => res.json())
  .then(guilds => {this.setState({ guilds })})
}
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
        <GuildsContainer guilds={this.state.guilds} delete={this.deleteHandler}  change={this.handleChangeFor} edit={this.editHandler} />
        <Form guilds={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
