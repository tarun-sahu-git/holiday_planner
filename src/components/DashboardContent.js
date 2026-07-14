import React from "react";
import "./DashboardContent.css";

const DashboardContent = () => {
  return (

    <div className="content">

      <h2>Dashboard Overview</h2>

      <div className="cards">

        <div className="card">
          Users
          <h3>120</h3>
        </div>

        <div className="card">
          Destinations
          <h3>35</h3>
        </div>

        <div className="card">
          Bookings
          <h3>54</h3>
        </div>

        <div className="card">
          Revenue
          <h3>$5200</h3>
        </div>

      </div>

    </div>

  );
};

export default DashboardContent;