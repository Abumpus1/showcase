import React from "react";
import "../styles/SearchResults.css";
import SearchGameCard from "./SearchGameCard";

function SearchResults({ results }) {
  const gameCards = results.map(result => {
    return (
      <SearchGameCard
      key={result.dealID}
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