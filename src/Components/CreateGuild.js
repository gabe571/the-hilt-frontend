import React from 'react'

class CreateGuild extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
            <h5>CREATE YOUR NEW GUILD HERE!</h5>

            Guild: <input type="text"  value={this.state.value} onChange={this.handleChange} />
            Realm: <input type="text" />  
            Faction: <input type="text" /> 
            Description: <textarea id="description" name="des" rows="4" cols="50"></textarea>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default CreateGuild;

  