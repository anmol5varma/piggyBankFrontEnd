import React from 'react';
import './Homepage.css';
import Signup from '../Signup';
import Login from '../Login';

const HomePage = props => (
  <div className="HomePage-Container">
    <div className="HomePage-signup"><Signup /></div>
    <div className="HomePage-divide" />
    <div className="HomePage-login"><Login /></div>
  </div>
);

export default HomePage;
