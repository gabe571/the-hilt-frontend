import React from 'react';

class Login extends React.Component {

    state = {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render(){
        console.log(this.state)
        return (
            <div className="Login">
                <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                 <label>UserName</label>
                 <input type="username" value={this.state.username} onChange={this.handleChange}></input>
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