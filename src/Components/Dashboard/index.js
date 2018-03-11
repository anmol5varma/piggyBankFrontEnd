import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';
import Header from '../Header';
import DashboardContent from '../DashboardContent';

const Dashboard = props => (
  <div className="Dashboard-container">
    <Header username="Anmol" />
    <DashboardContent balance="1,00,000" />
  </div>
);

export default Dashboard;
