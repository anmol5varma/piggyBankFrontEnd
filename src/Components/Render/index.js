import { Route, HashRouter, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import './render.css';
import SignupPage from '../SignupPage';
import Dashboard from '../Dashboard';
import ForgotPassword from '../ForgotPassword';
import ResetPassword from '../ResetPassword';
// import history from '../../history';


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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/user" component={Dashboard} />
            <Route path="/login" component={HomePage} />
            <Route path="/accountSettings" component={Dashboard} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/resetPassword/:token" component={ResetPassword} />
          </Switch>
        </main>
      );
    }
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/user" component={Dashboard} />
          <Route path="/login" component={HomePage} />
          <Route path="/accountSettings" component={Dashboard} />
        </Switch>
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
