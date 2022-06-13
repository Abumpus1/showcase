import React from "react";
import "../styles/SearchResults.css";
import SearchGameCard from "./SearchGameCard";
import PropTypes from "prop-types";

function SearchResults({ results, findStoreIcon }) {
  const gameCards = results.map(result => {
    return (
      <SearchGameCard
      key={result.dealID}
      findStoreIcon={findStoreIcon}
      {...result}
      />
    )
  })

  return (
    <div className="search-results">
      {gameCards.length > 0 ? gameCards : <h3>No results found! Please consider adjusting your search filters.</h3>}
    </div>
  )
}

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array,
  findStoreIcon: PropTypes.func
}