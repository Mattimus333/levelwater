import React from 'react';
import DashHeader from './dash-header';
import C3Visuals from './c3-visuals';
import DashAnalysis from './dash-analysis';
import DashButtons from './dash-buttons';
import styles from './dashboard.css';


const Dashboard = () => (
  <div id="dashboard">
    <DashHeader />
    <C3Visuals />
    {/* <DashAnalysis /> */}
    {/* <DashButtons /> */}
  </div>
);

export default Dashboard;


// financialData={this.props.ratesFinancesObject} criticalInfrastructure={this.props.criticalInfrastructure} noncriticalInfrastructure={this.props.noncriticalInfrastructure}
