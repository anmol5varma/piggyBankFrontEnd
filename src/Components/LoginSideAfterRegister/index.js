import axios from 'axios';
import React from 'react';
import './LoginSideAfterRegister.css';
import { Link } from 'react-router-dom';

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
      balance: '',
    };
  }
  render() {
    const makeLoginRequest = () => {
      console.log(this.state.username);
      console.log(this.state.password);
      console.log(this.props.history);


      axios.post('/login', {
        userName: this.state.username,
        password: this.state.password,
      }).then((response) => {
        console.log(response);
        if (window.localStorage) {
          localStorage.setItem('token', JSON.stringify({ token: response.headers.token }));
        }
        console.log('Hello', response.data.data);
        // this.setState({
        //   balance: response.data.data,
        // });
        this.props.history.push(`/user?balance=${response.data.data}`);
      }).catch((err) => {
        console.log(err);

        if (err.response.data.message === 'Please check password') {
          this.setState({
            incorrectPasswordError: 'Please enter correct password',
          });
        } else if (err.response.data.message === 'Please check user name') {
          this.setState({ incorrectUsernameError: 'Incorrect Username' });
        } else {
          this.setState({ incorrectUsernameError: 'Invaid Username' });
        }
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
            <div className="Loginside-heading1">Please, login to use your money safely.</div>
            <div className="Loginside-content">
              {form(
              updateUsername,
               updatePassword,
               this.state.incorrectPasswordError,
               this.state.incorrectUsernameError,
             )}
            </div>
            <div className="Loginside-button-wrapper">
              {/* <Link to={{ pathname: '/user', search: `?balance=${this.state.balance}` }}> */}
              <button className="Loginside-button" onClick={() => makeLoginRequest()}>
                <span className="Loginside-button-label">
         login
                </span>
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginSide;
