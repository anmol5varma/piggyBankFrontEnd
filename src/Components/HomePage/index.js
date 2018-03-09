import React from 'react';
import './Homepage.css';

const HomePage = props => (
  <div className="HomePage-Container">
    <div className="HomePage-signup"><SignupSide /></div>
    <div className="HomePage-login"><LoginSide /></div>
  </div>
);

export default HomePage;
