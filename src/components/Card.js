import { useState, useEffect, useCallback } from 'react';

function Card(props){
    const [mode, setMode] = useState('nosaved');
  
    const switchMode = useCallback(() => {
      setMode((prevMode) => (prevMode === 'nosaved' ? 'saved' : 'nosaved'));
    }, []);
  
  useEffect(() => {
    console.log(mode);
  }, [mode]); 
  
  const backgroundColor = mode === 'nosaved' ? '#d9e6a5' : 'pink';
  
    return(
      <div class="card" style={{ backgroundColor }}>
        <div class="avatar">
          <img src={props.avatar} alt="Avatar" />
        </div>
        <h3>{props.name}</h3>
        <p>
          CLASS & SUBJECT: {props.classasubject}<br />
          MUSIC CHOICE: {props.musicchoice}<br />
          LOCATION CHOICE: {props.locationchoice}
        </p>
        <button className="save-profile" onClick={switchMode}>
          {mode === 'nosaved' ? 'Save Profile' : 'Unsave Profile'}
        </button>      
        <button class="connect-linkedin" >Connect on LinkedIn
        </button>
      </div>
    );
  }

  export default Card;