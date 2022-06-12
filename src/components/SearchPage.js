import React, { useState } from "react";
import "../styles/SearchPage.css";
import Filters from "./Filters";
import SearchResults from "./SearchResults";

function SearchPage() {

  const [results, setResults] = useState([])

  const findGames = (filterOptions) => {
    let urlData = ""
    if (filterOptions.title) {
      urlData += `title=${filterOptions.title}&`
    }
    if (filterOptions.priceLimit < 50) {
      urlData += `upperPrice=${filterOptions.priceLimit}&`
    }

    console.log("URL DATA RIGHT HERE BOYO", urlData);
  }

  return (
    <div className="search-page">
      <Filters findGames={findGames} />
      <SearchResults />
    </div>
  )
}

export default SearchPage;