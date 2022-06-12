import React from "react";
import "../styles/SearchResults.css";
import SearchGameCard from "./SearchGameCard";

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
      {gameCards}
    </div>
  )
}

export default SearchResults;