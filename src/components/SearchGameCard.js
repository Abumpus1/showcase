import React from "react";
import "../styles/SearchGameCard.css";

function SearchGameCard() {
  return (
    <div className="search-game-card">
      <div className="game-card-left">
        <div className="game-image-box">
          <img className="game-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/20920/capsule_sm_120.jpg?t=1646335562" />
        </div>
        <h4>GAME TITLE</h4>
      </div>
    </div>
  )
}

export default SearchGameCard;