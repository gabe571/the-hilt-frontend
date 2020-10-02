// import React, { Component } from 'react'

// class Applications extends React.Component {
 
//     state = {
//         application: [],
//         user_id: this.props.applications.user_id,
//         guild_id:this.props.applications.guild_id,
//         content: this.props.applications.content
//     } 

// handleContentEdit = (event) => {
//     this.setState ({
//         content: event.target.value,
//         user_id: event.target.value,
//         guild_id: event.target.value
//     })
// }

// addContent = () => {
//     return {user_id: this.state.user_id, guild_id: this.state.guild_id,content: this.state.name }
// }
// render() {
//     const { name, realm, faction, img_url, description } = this.props.guild
//     return (
//         <div>
//             {this.state.edit ?
//                 <ul className="cards__item">
//                     <div className="card">
//                         <img src={img_url}></img>
//                         <div className="card_content">
//                             <div className="card_title">Guild:{name}
//                                 <div className="realm">Realm: {realm}</div>
//                                 <div className="faction">Faction: {faction}</div>
//                                 <div className="card_text">Description:{description}</div>
//                                 <button onClick={() => this.props.delete(this.props.guild)}>Delete</button>
//                                 <button onClick={() => this.handleShowForm()}>Edit</button>
//                                 <button onClick={() => this.handleFormApply()}>Apply</button>
//                             </div>
//                         </div>
//                     </div>
//                 </ul>
//                 :
//                 <form onSubmit={(e) => this.props.edit(e, this.addGuild())}>
//                     <div>
//                         <label>Guild Name</label>
//                         <input type='text' value={this.state.name} onChange={this.handleNameEdit} />
//                     </div>
//                     <div>
//                         <label>Realm</label>
//                         <input type='text' value={this.state.realm} onChange={this.handleRealmEdit} />
//                     </div>
//                     <div>
//                         <label>Faction</label>
//                         <input type='text' value={this.state.faction} onChange={this.handleFactionEdit} />
//                     </div>
//                     <div>
//                         <label>Description</label>
//                         <input type='text' value={this.state.description} onChange={this.handleDescrpitionEdit} />
//                     </div>
//                     <div>
//                         <label>img_url</label>
//                         <input type='text' value={this.state.img_url} onChange={this.handleImageEdit} />
//                     </div>
//                     <button type="submit">Update</button>
//                 </form >
//             }
//         </div>
//     )
// }
// }
// export default Applications;