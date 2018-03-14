import React from 'react';
import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './Dashboard.css';
import Header from '../Header';
import DashboardContent from '../NewDashboardContent';
import HomePage from '../HomePage';

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
  const token = JSON.parse(localStorage.getItem('token'));
  if (token === null) {
    return (
      <HomePage />
    );
  }
  const params = queryString.parse(props.location.search);
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="Dashboard-container">
        <Header username={params.username} />
        <DashboardContent username={params.username} />
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

