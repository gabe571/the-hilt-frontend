import React from 'react';

class Guild extends React.Component {
 
    state = {
        guild: [],
        name: '',
        realm: '',
        faction: '',
        img_url: '',
        description: ''
    } 
    handleEdit = (e) => {
        e.preventDefault()
        const Name = this.state.name
        const Realm = this.state.realm
        const Faction = this.state.faction
        const Descripton = this.state.description
        const img_url = this.state.img_url
       console.log(Name)
       console.log(Realm)
       console.log(Faction)
       console.log(Descripton)
       this.props.guilds(Name, Realm, Faction, Descripton, img_url)
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
render() {
    const {name, realm, faction, img_url, description} = this.props.guild

return (

    {this.guild === 'guild' ?
<ul className="cards__item">
    <div className="card">
        <img src={img_url}></img>
        <div className="card_content">
            <div className="card_title">Guild:{name} 
                <div className="realm">Realm: {realm}</div>
                <div className="faction">Faction: {faction}</div>
        <div className="card_text">Description:{description}</div>
        <button onClick={() => this.props.delete(this.props.guild)}>Delete</button>
        <button onClick={() => this.props.edit(this.props.guild)}>Submit</button>
            </div>
        </div>

    </div>
</ul>

:
    <form onSubmit={this.editHandler}/>
    <div>
        <label>Guild Name</label>
        <input type='text'  value={this.state.name} onChange={this.handleNameEdit}/>
    </div>
    <div>
    <label>Realm</label>
        <input type='text' value={this.state.realm} onChange={this.handleRealmEdit}/>
    </div>
    <div>
    <label>Faction</label>
        <input type='text' value={this.state.faction} onChange={this.handleFactionEdit}/>
    </div>
    <div>
    <label>Description</label>
        <input type='text' value={this.state.description} onChange={this.handleDescrpitionEdit}/>
    </div>
    <div>
    <label>img_url</label>
        <input type='text' value={this.state.img_url} onChange={this.handleImageEdit}/>
    </div>
    <button type="submit">Create!</button>
</form>})
}
export default Guild;
