import React from "react";
import "../styles/DashboardGameCard.css";

function DashboardGameCard({ game }) {
  return (
    <div className="dash-game-card">
        <a href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`} target="_blank">
          <h4 title={game.title} className="dash-game-title">{game.title}</h4>
        </a>
      <div className="dash-price-box">
        <p className="dash-old-price">${game.normalPrice}</p>
        <p className="dash-sale-price">${game.salePrice}</p>
      </div>
    </div>
  )
}

export default DashboardGameCard;