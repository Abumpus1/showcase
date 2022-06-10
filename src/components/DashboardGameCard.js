import React from "react";
import "../styles/DashboardGameCard.css";

function DashboardGameCard() {
  return (
    <div className="dash-game-card">
      <h4>Game Tile Here</h4>
      <div className="dash-price-box">
        <p>-$30-</p>
        <p>$3</p>
      </div>
    </div>
  )
}

export default DashboardGameCard;