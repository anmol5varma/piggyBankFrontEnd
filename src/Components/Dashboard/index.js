import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Dashboard.css';
import Header from '../Header';
import DashboardContent from '../NewDashboardContent';
import AccountSettings from '../AccountSettings';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'User',
      currentBalance: 0,
    };
  }
  componentWillMount() {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token === null) {
      return this.props.history.push('/login');
    }
    const axiosConfig = {
      headers: {
        Authorization: token.token,
      },
    };
    axios.post('/user/balance', null, axiosConfig).then((response) => {
      this.setState({
        userName: response.data.userName,
        currentBalance: response.data.currentBalance,
      });
      return response;
    });
    return 0;
  }
  render() {
    return (
      <div className="Dashboard-container">
        <Header
          username={this.state.userName}
          balance={this.state.currentBalance}
        />
        <Switch>
          <Route
            path="/user"
            render={() => (<DashboardContent
              history={this.props}
              username={this.state.userName}
              balance={this.state.currentBalance}
            />)}
          />
          <Route
            path="/accountSettings"
            render={() => <AccountSettings username={this.state.userName} />}
          />
        </Switch>
      </div>
    );
  }
}
export default Dashboard;
Dashboard.propTypes = {
  history: PropTypes.shape.isRequired,
};

