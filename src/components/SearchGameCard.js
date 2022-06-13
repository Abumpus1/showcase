import React from "react";
import "../styles/SearchGameCard.css";
import PropTypes from "prop-types";

function SearchGameCard({ dealID, normalPrice, salePrice, savings, thumb, title, storeID, findStoreIcon }) {

  savings = Math.round(savings)

  return (
    <div className="search-game-card">
      <div className="game-card-left">
        <img className="store-icon" src={findStoreIcon(storeID)}/>
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
        <p className="sale-percent">-{savings}%</p>
      </div>
    </div>
  )
}

export default SearchGameCard;

SearchGameCard.propTypes = {
  dealID: PropTypes.string, 
  normalPrice: PropTypes.string, 
  salePrice: PropTypes.string, 
  savings: PropTypes.string, 
  thumb: PropTypes.string, 
  title: PropTypes.string, 
  storeID: PropTypes.string, 
  findStoreIcon: PropTypes.func
}