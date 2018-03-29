import { Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from '../HomePage';
import './render.css';
import SignupPage from '../SignupPage';
import Dashboard from '../Dashboard';
import ForgotPassword from '../PasswordForgot';
import ResetPassword from '../PasswordReset';
import PageNotFound from '../PageNotFound';

class App extends React.Component {
  render() {
    return (
      <main className="Main-render">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/user" component={Dashboard} />
          <Route path="/login" component={HomePage} />
          <Route path="/accountSettings" component={Dashboard} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/resetPassword/:token" component={ResetPassword} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </main>
    );
  }
}
export default App;

