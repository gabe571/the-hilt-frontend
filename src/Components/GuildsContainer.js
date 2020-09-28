import React from 'react';
import Guild from './Guild'
import Form from './Form'

const GuildsContainer = (props) => {

    return (
      <ul className="cards">
        {
          props.guilds.map(guild => <Guild key={guild.id} guild={guild}/>)
        }  
      </ul>
    )
  };
  export default GuildsContainer;