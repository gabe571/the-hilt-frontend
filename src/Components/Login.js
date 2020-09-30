import React from 'react';

class Login extends React.Component {
    render(){
        return (
            <div className="Login">
                <form>
                 <label>UserName</label>
                 <input></input>
                 <br/>
                 <label>Password</label>
                 <input></input></form>
            </div>
        );
    }
}

export default Login;