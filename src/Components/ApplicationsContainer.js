import React from 'react';
import AppForm from './AppForm'
import Applications from './Applications'

const ApplicationsContainer = (props) => {

    return (
      <ul className="cards">
        {
          props.applications.map(application => <Applications key={application.id} application={application}/>)
        }  
      </ul>
    )
  };
 
 export default ApplicationsContainer;