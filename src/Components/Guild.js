import React from 'react';
 
class Guild extends React.Component {
render() {
    let {name, realm, faction, img_url, description} = this.props.guild

return <ul className="cards__item">
    <div className="card">
        <img src={img_url}></img>
        <div className="card_content">
            <div className="card_title">Guild:{name}
                <div className="realm">Realm: {realm}</div>
                <div className="faction">Faction: {faction}</div>
        <div className="card_text">Description:{description}</div>
            </div>
        </div>

    </div>
</ul>

 }
}     
export default Guild;
