import React from 'react';
import './Signuppage.css';
import SignupContent from '../SignupContent';
import SignupForm from '../SignupForm';


const SignupPage = () => (
  <div className="Signuppage-Container">
    <div className="Signuppage-signup"><SignupContent /></div>
    <div className="Signuppage-login"><SignupForm /></div>
  </div>
);

export default SignupPage;