import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function Navbar() {
  return(
    <nav>
    <img src="https://i.postimg.cc/XYKS7S0m/logo-png.png" class="center" />
    <span>FIND UR NERD</span>
    <span>LOCK IN TRACKER</span>
    <span>Study Profile</span>
  </nav>
  )
}

function Card(props){
  const [mode, setMode] = useState('nosaved');

const switchMode = () => {
  if (mode === 'nosaved') {
    setMode('saved');
  } else if (mode === 'saved'){
    setMode('nosaved');
  }
};

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
      </button>      <button class="connect-linkedin" >Connect on LinkedIn</button>
    </div>
  )
}

function App() {
  return (
      <div>
  <Navbar />

  <div class="box">
    <h3>FILTER BY:</h3>
    <div class="button-row">
      <button class="class-subject">Class & Subject</button>
      <button class="music-choice">Music Choice</button>
      <button class="location-choice">Location Choice</button>
    </div>
    <div>
      <button class="keyword">Keyword</button>
      <button class="submit">Submit</button>
    </div>
  </div>

  <div class="container">
      <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="Bob" classasubject="Chemistry" musicchoice="Lofi" locationchoice="Mudd Library"></Card>
      <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="Jane" classasubject="Chemistry" musicchoice="Classic" locationchoice="Main Library"></Card>
      <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="Ashley" classasubject="Chemistry" musicchoice="Pop" locationchoice="Tech"></Card>
      <Card avatar="https://i.postimg.cc/QNPj5JDp/39413-1000.jpg" name="John" classasubject="Chemistry" musicchoice="None" locationchoice="Willard"></Card>
  </div>

  <div class="footer">
    <div class="newsletter">
      <h2>NEWSLETTER</h2>
      <p>
        Want to know what we’re up to? Sign up for the newsletter and join study
        muddies.
      </p>
      <div class="newsletter-actions">
        <button class="email">Email</button>
        <button class="subscribe">Subscribe</button>
      </div>
    </div>

    <div class="footer-sections">
      <div class="footer-about">
        <h3>About</h3>
        <div>
          History <br />
          Schedule
        </div>
        <h3>Our Team</h3>
        <div>
          Community <br />
          Affiliate Programs
        </div>
      </div>
      <div class="footer-follow">
        <h3>Follow Us</h3>
        <div>
          Instagram <br />
          LinkedIn
        </div>
        <h3>Contact</h3>
        <div>
          T:(847) 491-3741 <br />
          E:NU@u.northwestern.edu
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
