import React, { Component } from 'react'

class Form extends React.Component {
state = {
    name: '',
    realm: '',
    faction: '',
    img_url: '',
    description: ''
}

handleForm = (e) => {
    e.preventDefault()
    const Name = this.state.name
    const Realm = this.state.realm
    const Faction = this.state.faction
    const Descripton = this.state.description
    const img_url = this.state.img_url
   this.props.guilds(Name, Realm, Faction, Descripton, img_url)
}

handleNameChange = (event) => {
    this.setState ({
        name: event.target.value
    })
}

handleRealmChange = (event) => {
    this.setState ({
        realm: event.target.value
    })
}

handleFactionChange = (event) => {
    this.setState ({
        faction: event.target.value
    })
}

handleDescrpitionChange = (event) => {
    this.setState ({
        description: event.target.value
    })
}
handleImageChange = (event) => {
    this.setState ({
        img_url: event.target.value
    }) 
}

    render() {
        return (
           
           <form onSubmit={this.handleForm}>
               <div>
                   <label>Guild Name</label>
                   <input type='text'  value={this.state.name} onChange={this.handleNameChange}/>
               </div>
               <div>
               <label>Realm</label>
                   <input type='text' value={this.state.realm} onChange={this.handleRealmChange}/>
               </div>
               <div>
               <label>Faction</label>
                   <input type='text' value={this.state.faction} onChange={this.handleFactionChange}/>
               </div>
               <div>
               <label>Description</label>
                   <input type='text' value={this.state.description} onChange={this.handleDescrpitionChange}/>
               </div>
               <div>
               <label>img_url</label>
                   <input type='text' value={this.state.img_url} onChange={this.handleImageChange}/>
               </div>
               <button type="submit">Create!</button>
           </form>
        )
    }
}

export default Form