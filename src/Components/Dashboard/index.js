import React from 'react';
<<<<<<< HEAD
import queryString from 'query-string';
=======
>>>>>>> master
import PropTypes from 'prop-types';
import './Dashboard.css';
import Header from '../Header';
import DashboardContent from '../DashboardContent';

<<<<<<< HEAD
const Dashboard = (props, context) => {
  const params = queryString.parse(props.location.search);
  console.log('Hello Dashboard', params.balance);
  console.log(props);
  return (
    <div className="Dashboard-container">
      <Header username={params.username} />
      <DashboardContent balance={params.balance} />
    </div>
  );
};
=======
const Dashboard = props => (
  <div className="Dashboard-container">
    <Header username="Anmol" />
    <DashboardContent balance="1,00,000" />
  </div>
);

>>>>>>> master
export default Dashboard;
