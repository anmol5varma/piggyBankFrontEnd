import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import './render.css';
import SignupPage from '../SignupPage';
import Dashboard from '../Dashboard';
import ForgotPassword from '../PasswordForgot';
import ResetPassword from '../ResetPassword';

// import history from '../../history';
const options = {
  timeout: 4000,
  position: 'top center',
  offset: '10px',
  transition: 'scale',
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isToken: false,
    };
  }
  render() {
    if (this.state.isToken === false) {
      return (
        <main>
          <Provider template={AlertTemplate} {...options}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/user" component={Dashboard} />
              <Route path="/login" component={HomePage} />
              <Route path="/accountSettings" component={Dashboard} />
              <Route path="/ForgotPassword" component={ForgotPassword} />
              <Route path="/resetPassword/:token" component={ResetPassword} />
            </Switch>
          </Provider>
        </main>
      );
    }
    return (
      <main>
        <Provider template={AlertTemplate} {...options}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/user" component={Dashboard} />
            <Route path="/login" component={HomePage} />
            <Route path="/accountSettings" component={Dashboard} />
          </Switch>
        </Provider>
      </main>
    );
  }
}

const App = () => (
  <div className="Main-render">
    <Main />
  </div>
);
ReactDOM.render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  ), document.getElementById('root'),
);
