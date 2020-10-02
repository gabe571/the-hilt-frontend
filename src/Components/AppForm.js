import React, { Component } from 'react'

class AppForm extends React.Component {
state = {
    content: '',
    user_id:0,
    guild_id:0
}

handleFormApply = (e) => {
    e.preventDefault()
    const Content = this.state.content
    const User_id = this.state.user_id
    const Guild_id = this.state.guild_id
   this.props.applications(Content, User_id, Guild_id)
}

handleApplyChange = (event) => {
    this.setState ({
        content: event.target.value
    })
}
handleUserChange = (event) => {
    this.setState ({
        user_id: event.target.value
    })
}
handleGuildChange = (event) => {
    this.setState ({
        guild_id: event.target.value
    })
}
      render() {
        return (
           
           <form onSubmit={this.handleFormApply}>
               <div>
                   <label>Apply HERE!</label>
                   <textarea value={this.state.name} onChange={this.handleApplyChange}/>
               </div>
                     <div>
                        <label>User_id</label>
                        <input type='text' value={this.state.user_id} onChange={this.handleUserChange} />
                    </div>
                    <div>
                        <label>Guild_id</label>
                        <input type='text' value={this.state.guild_id} onChange={this.handleGuildChange} />
                    </div>
               <div>
               </div>
               <button type="submit">Submit Application</button>
           </form>
        )
    }
}

export default AppForm