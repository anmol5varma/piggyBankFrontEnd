import React from 'react';
import './Homepage.css';
import SignupSide from '../SignupSide';
// import LoginSide from '../SignupSide';


const HomePage = () => (
  <div className="HomePage-Container">
    <div className="HomePage-signup"><SignupSide /></div>
    <div className="HomePage-login"><SignupSide /></div>
  </div>
);

export default HomePage;
