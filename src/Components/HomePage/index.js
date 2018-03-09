import React from 'react';
import './Homepage.css';
import SignupSide from '../SignupSide';
import LoginSide from '../LoginSide';


const HomePage = () => (
  <div className="HomePage-Container">
    <div className="HomePage-signup"><SignupSide /></div>
    <div className="HomePage-login"><LoginSide /></div>
  </div>
);

export default HomePage;
