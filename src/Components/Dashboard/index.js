import React from 'react';
import { Provider } from 'react-alert';
import { Switch, Route } from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './Dashboard.css';
import Header from '../Header';
import DashboardContent from '../NewDashboardContent';
import AccountSettings from '../AccountSettings';

// class AlertTemplate extends React.Component {
//   render() {
//     <div style={style}>
//       {options.type === 'info' && '!'}
//       {options.type === 'success' && ':)'}
//       {options.type === 'error' && ':('}
//       {hello
//       <button onClick={close}>X</button>
//     </div>;
//   }
// }
const options = {
  timeout: 100000,
  position: 'top center',
  offset: '10px',
  transition: 'scale',
};
const Dashboard = (props) => {
  const params = queryString.parse(props.location.search);
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="Dashboard-container">
        <Header username={params.username} />
        <Switch>
          <Route path="/user" render={() => <DashboardContent username={params.username} />} />
          <Route path="/accountSettings" render={() => <AccountSettings username={params.username} />} />
        </Switch>
      </div>
    </Provider>
  );
};
export default Dashboard;
// Dashboard.propTypes = {
//   location: PropTypes.string.required(),
// };
// Dashboard.defaultProps = {
//   location: '',
// };

