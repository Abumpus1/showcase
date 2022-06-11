import React from "react";
import "../styles/SearchPage.css"
import Filters from "./Filters";
import SearchResults from "./SearchResults";

function SearchPage() {
  return (
    <div className="search-page">
      <Filters />
      <SearchResults />
    </div>
  )
}

export default SearchPage;