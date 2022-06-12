import React from "react";
import "../styles/SearchGameCard.css";

function SearchGameCard({ dealID, normalPrice, salePrice, savings, thumb, title, storeID }) {

  savings = Math.round(savings)

  return (
    <div className="search-game-card">
      <div className="game-card-left">
        <img src=""/>
        <div className="game-image-box">
          <img className="game-image" src={thumb} />
        </div>
        <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target="_blank">
          <h4>{title}</h4>
        </a>
      </div>
      <div className="game-card-right">
        <div className="game-price-box">
          <p className="game-old-price">${normalPrice}</p>
          <p className="game-sale-price">${salePrice}</p>
        </div>
        <p className="sale-percent">{savings}%</p>
      </div>
    </div>
  )
}

export default SearchGameCard;