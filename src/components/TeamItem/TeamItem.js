
import React from 'react';
import './TeamItem.css';

function TeamItem(props) {
  return (
    <div className="team-grid">
      <div className="App-TeamMember">
        <img src={props.photoUrl} className="App-fotoTeamMember" alt="logo" />    
        <a href={props.gitHubUrl} className='MemberName'>{props.memberName}</a>
     </div>
    </div>
  );
}

export {TeamItem};