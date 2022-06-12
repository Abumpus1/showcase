import React, { useEffect, useState } from "react";
import { getDeals } from "../apiCalls";
import "../styles/SearchPage.css";
import Filters from "./Filters";
import SearchResults from "./SearchResults";

function SearchPage({ findStoreIcon }) {

  const [results, setResults] = useState([])

  const findGames = (filterOptions) => {
    let urlData = ""
    
    if (filterOptions && filterOptions.title) {
      urlData += `title=${filterOptions.title}&`
    }
    if (filterOptions && filterOptions.priceLimit < 50) {
      urlData += `upperPrice=${filterOptions.priceLimit}&`
    }

    getDeals(urlData).then(data => {
      setResults(data)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    findGames()
  },[])

  return (
    <div className="search-page">
      <Filters findGames={findGames} />
      {!!results.length ? <SearchResults findStoreIcon={findStoreIcon} results={results} /> : <p>Loading Titles...</p>}
    </div>
  )
}

export default SearchPage;