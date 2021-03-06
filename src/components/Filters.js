import React, { useState } from "react";
import "../styles/Filters.css";
import PropTypes from "prop-types";

function Filters({ findGames }) {

  const [searchInput, setSearchInput] = useState("")
  const [maxPrice, setMaxPrice] = useState("50")

  const displayMaxPrice = () => {
    return parseInt(maxPrice) < 50 ? `$${maxPrice} and under` : "No limit"
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let filterOptions = {
      title: searchInput,
      priceLimit: maxPrice
    }
    findGames(filterOptions)
  }

  return (
    <form onSubmit={event => handleSubmit(event)} className="filters">
      <div className="filter-box">
        <div className="title-box">
          <label className="title-search-label" htmlFor="title-search">TITLE:</label>
          <input value={searchInput} onChange={event => setSearchInput(event.target.value)} name="title-search" placeholder="Search By Title..." className="title-search" type="text"/>
        </div>
        <div className="price-limit-box">
          <p>Price Limit: {displayMaxPrice()}</p>
          <input className="price-slider" type="range" min="1" max="50" value={maxPrice} onChange={event => setMaxPrice(event.target.value)}/>
        </div>
      </div>
      <button className="apply-filters-btn">APPLY</button>
    </form>
  )
}

export default Filters;

Filters.propTypes = {
  findGames: PropTypes.func
}