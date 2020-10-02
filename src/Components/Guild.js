import React, { Component } from 'react'
import ApplicationsContainer from './ApplicationsContainer'
import Applications from './Applications'

class Guild extends React.Component {
 
    state = {
        guild: [],
        id: this.props.guild.id,
        name: this.props.guild.name,
        realm: this.props.guild.realm,
        faction: this.props.guild.faction,
        img_url: this.props.guild.img_url,
        description: this.props.guild.description,
        edit: true
    } 

handleNameEdit = (event) => {
    this.setState ({
        name: event.target.value
    })
}

handleRealmEdit = (event) => {
    this.setState ({
        realm: event.target.value
    })
}

handleFactionEdit = (event) => {
    this.setState ({
        faction: event.target.value
    })
}

handleDescrpitionEdit = (event) => {
    this.setState ({
        description: event.target.value
    })
}
handleImageEdit = (event) => {
    this.setState ({
        img_url: event.target.value
    }) 
}

handleShowForm = () => {
    this.setState({edit: false})
}

addGuild = () => {
    return {id: this.state.id, name: this.state.name, realm: this.state.realm, faction: this.state.faction, img_url: this.state.img_url, description: this.state.description }
}
render() {
    const { name, realm, faction, img_url, description } = this.props.guild
    return (
        <div>
            {this.state.edit ?
                <ul className="cards__item">
                    <div className="card">
                        <img src={img_url}></img>
                        <div className="card_content">
                            <div className="card_title">Guild:{name}
                                <div className="realm">Realm: {realm}</div>
                                <div className="faction">Faction: {faction}</div>
                                <div className="card_text">Description:{description}</div>
                                <button onClick={() => this.props.delete(this.props.guild)}>Delete</button>
                                <button onClick={() => this.handleShowForm()}>Edit</button>
                                <button onClick={() => this.handleFormApply()}>Apply</button>
                            </div>
                        </div>
                    </div>
                </ul>
                :
                <form onSubmit={(e) => this.props.edit(e, this.addGuild())}>
                    <div>
                        <label>Guild Name</label>
                        <input type='text' value={this.state.name} onChange={this.handleNameEdit} />
                    </div>
                    <div>
                        <label>Realm</label>
                        <input type='text' value={this.state.realm} onChange={this.handleRealmEdit} />
                    </div>
                    <div>
                        <label>Faction</label>
                        <input type='text' value={this.state.faction} onChange={this.handleFactionEdit} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type='text' value={this.state.description} onChange={this.handleDescrpitionEdit} />
                    </div>
                    <div>
                        <label>img_url</label>
                        <input type='text' value={this.state.img_url} onChange={this.handleImageEdit} />
                    </div>
                    <button type="submit">Update</button>
                </form >
            }
        </div>
    )
}
}
export default Guild;