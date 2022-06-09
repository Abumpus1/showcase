import React from "react";
import StoreDealBox from "./StoreDealBox";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <StoreDealBox />
      <StoreDealBox />
      <StoreDealBox />
      <StoreDealBox />
    </div>
  )
}

export default Dashboard;