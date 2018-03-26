import React from 'react';
import { Provider } from 'react-alert';
import { Switch, Route } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './Dashboard.css';
import axios from 'axios';
import Header from '../Header';
import DashboardContent from '../NewDashboardContent';
import AccountSettings from '../AccountSettings';


const options = {
  timeout: 100000,
  position: 'top center',
  offset: '10px',
  transition: 'scale',
};
class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'User',
    };
  }

  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('token'));
    const axiosConfig = {
      headers: {
        Authorization: token.token,
      },
    };
    axios.post('/user/balance', null, axiosConfig).then((response) => {
      this.setState({
        userName: response.data.userName,
      });
      return response;
    });
  }
  render() {
    return (
      <Provider template={AlertTemplate} {...options}>
        <div className="Dashboard-container">
          <Header username={this.state.userName} />
          <Switch>
            <Route path="/user" render={() => <DashboardContent username={this.state.userName} />} />
            <Route path="/accountSettings" render={() => <AccountSettings username={this.state.userName} />} />
          </Switch>
        </div>
      </Provider>
    );
  }
}
export default Dashboard;
// Dashboard.propTypes = {
//   location: PropTypes.string.required(),
// };
// Dashboard.defaultProps = {
//   location: '',
// };

