import axios from 'axios';
import React from 'react';
import './Loginside.css';


const form = (updateUsername, updatePassword, incorrectPasswordError, incorrectUsernameError) => (
  <div>
    <input
      type="text"
      placeholder="Username"
      className="Login-input-field"
      onChange={updateUsername}
    />
    <div className="Error-message">{incorrectUsernameError}</div>
    <input type="password" placeholder="Password" className="Login-input-field" onChange={updatePassword} />
    <div className="Error-message">{incorrectPasswordError}</div>
  </div>
);

class LoginSide extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      incorrectPasswordError: '',
      incorrectUsernameError: '',
    };
  }
  render() {
    console.log('Hello', this.state.incorrectPasswordError);
    console.log(this.state.incorrectUsernameError);
    const makeLoginRequest = () => {
      axios.post('/login', {
        userName: this.state.username,
        password: this.state.password,
      }).then((response) => {
        console.log('LOGIN');
        console.log(response);
      }).catch((err) => {
        console.log('SUrabhi');
        if (err.response.data.message === 'Please check password') {
          this.setState({
            incorrectPasswordError: 'Please enter correct password',
          });
        } else if (err.response.data.message === 'Please check user name') {
          this.setState({ incorrectUsernameError: 'Incorrect Username' });
        } else {
          this.setState({ incorrectUsernameError: 'Invaid Username' });
        }
        console.log(this.state.incorrectPasswordError, this.state.incorrectUsernameError);
      });
    };
    const updateUsername = (event) => {
      if (event.target.value.match(/^[a-zA-Z0-9_.-]*$/)) {
        this.setState({
          username: event.target.value,
          incorrectPasswordError: '',
          incorrectUsernameError: '',
        });
      }
    };

    const updatePassword = (event) => {
      this.setState({
        password: event.target.value,
        incorrectPasswordError: '',
        incorrectUsernameError: '',
      });
    };
    return (
      <div className="Loginside-container">
        <div className="Loginside-box">
          <div className="Loginside-welcome-message">
            <div className="Loginside-heading">Or login into your account</div>
            <div className="Loginside-content">
              {form(
               updateUsername,
                updatePassword,
                this.state.incorrectPasswordError,
                this.state.incorrectUsernameError,
              )}
            </div>
            <div className="Loginside-button-wrapper">
              <button className="Loginside-button" onClick={() => makeLoginRequest()}>
                <span className="Loginside-button-label">
          login
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginSide;
