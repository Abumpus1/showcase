import React from "react";
import StoreDealBox from "./StoreDealBox";
import "../styles/Dashboard.css";
import PropTypes from "prop-types";

function Dashboard({ steam, gog, humble, epic, gamesPlanet, origin }) {
  return (
    <div className="dashboard">
      <StoreDealBox store={steam} />
      <StoreDealBox store={humble} />
      <StoreDealBox store={gog} />
      <StoreDealBox store={epic} />
      <StoreDealBox store={origin} />
      <StoreDealBox store={gamesPlanet} />
    </div>
  )
}

export default Dashboard;

Dashboard.propTypes = {
  steam: PropTypes.object,
  gog: PropTypes.object,
  humble: PropTypes.object,
  epic: PropTypes.object,
  gamesPlanet: PropTypes.object,
  origin: PropTypes.object
}