import React from "react";
import "../styles/DashboardGameCard.css";

function DashboardGameCard({ game }) {
  // console.log(game.thumb);
  return (
    <div className="dash-game-card">
      <h4 className="dash-game-title">{game.title}</h4>
      <div className="dash-price-box">
        <p className="dash-old-price">${game.normalPrice}</p>
        <p className="dash-sale-price">${game.salePrice}</p>
      </div>
    </div>
  )
}

export default DashboardGameCard;