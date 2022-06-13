import React from "react";
import StoreDealBox from "./StoreDealBox";
import "../styles/Dashboard.css";
import PropTypes from "prop-types";

function Dashboard({ stores }) {
  return (
    <div className="dashboard">
      <StoreDealBox store={stores[0]} />
      <StoreDealBox store={stores[10]} />
      <StoreDealBox store={stores[6]} />
      <StoreDealBox store={stores[24]} />
      <StoreDealBox store={stores[7]} />
      <StoreDealBox store={stores[26]} />
    </div>
  )
}

export default Dashboard;

Dashboard.propTypes = {
  stores: PropTypes.array
}