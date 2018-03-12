import React from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import './Dashboard.css';
import Header from '../Header';
import DashboardContent from '../DashboardContent';

const Dashboard = (props, context) => {
  const params = queryString.parse(props.location.search);
  console.log('Hello Dashboard', params.balance);
  console.log(props);
  return (
    <div className="Dashboard-container">
      <Header username="Anmol" />
      <DashboardContent balance={params.balance} />
    </div>
  );
};
export default Dashboard;
