import React from "react";
import "../styles/DashboardGameCard.css";
import PropTypes from "prop-types";

function DashboardGameCard({ title, dealID, normalPrice, salePrice }) {
  return (
    <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target="_blank" className="dash-game-card">
      <div>
        <h4 title={title} className="dash-game-title">{title}</h4>
      </div>
      <div className="dash-price-box">
        <p className="dash-old-price">${normalPrice}</p>
        <p className="dash-sale-price">${salePrice}</p>
      </div>
    </a>
  )
}

export default DashboardGameCard;

DashboardGameCard.propTypes = {
  title: PropTypes.string,
  dealID: PropTypes.string,
  normalPrice: PropTypes.string,
  salePrice: PropTypes.string
}