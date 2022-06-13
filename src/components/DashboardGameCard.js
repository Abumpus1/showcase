import React from "react";
import "../styles/DashboardGameCard.css";
import PropTypes from "prop-types";

function DashboardGameCard({ title, dealID, normalPrice, salePrice }) {
  return (
    <div className="dash-game-card">
        <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target="_blank">
          <h4 title={title} className="dash-game-title">{title}</h4>
        </a>
      <div className="dash-price-box">
        <p className="dash-old-price">${normalPrice}</p>
        <p className="dash-sale-price">${salePrice}</p>
      </div>
    </div>
  )
}

export default DashboardGameCard;

DashboardGameCard.propTypes = {
  title: PropTypes.string,
  dealID: PropTypes.string,
  normalPrice: PropTypes.string,
  salePrice: PropTypes.string
}