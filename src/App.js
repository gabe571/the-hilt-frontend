import React from 'react';
import './App.css';
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

  render() {
    console.log(this.state.guilds)
    return (
      <div>
        <GuildsContainer guilds={this.state.guilds} />
      </div>
    );
  }
}

export default App;
