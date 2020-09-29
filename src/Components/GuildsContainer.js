import React from 'react';
import Guild from './Guild'

const GuildsContainer = (props) => {

    return (
      <ul className="cards">
        {
          props.guilds.map(guild => <Guild key={guild.id} guild={guild} delete={props.delete} edit={props.edit}/>)
        }  
      </ul>
    )
  };
  export default GuildsContainer;