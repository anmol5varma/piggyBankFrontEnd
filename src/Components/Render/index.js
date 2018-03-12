import { Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import './render.css';
import SignupPage from '../SignupPage';
import Dashboard from '../Dashboard';
// import history from '../../history';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isToken: false,
    };
  }
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      this.setState({
        isToken: true,
      });
    }
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
        </Switch>
      </main>
    );
  }
}

const App = (props, context) => (
  <div className="Main-render">
    <Main />
  </div>
);
ReactDOM.render(
  (
    <HashRouter>
      <App />
    </HashRouter>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  ), document.getElementById('root'),
);
