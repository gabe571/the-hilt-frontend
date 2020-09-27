import React from 'react';
import './App.css';


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
        <h1>GUILDS!</h1>
      </div>
    );
  }
}

export default App;
