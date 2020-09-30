import React from 'react';

class Login extends React.Component {

    state = {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        // debugger
        e.preventDefault()
        // let {name, password} = e.target
        // console.log(name, password)
        this.setState({
          [e.target.name]: e.target.value 
        })
    }
    render(){
        return (
            <div className="Login">
                  <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
                 <label>UserName</label>
                 <input type="username" name="name" value={this.state.username} onChange={this.handleChange}></input>
                 <br/>
                 <label>Password</label>
                 <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                 <br/>
                 <input type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
}

export default Login;