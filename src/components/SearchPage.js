import React, { useEffect, useState } from "react";
import { getDeals } from "../apiCalls";
import "../styles/SearchPage.css";
import Filters from "./Filters";
import SearchResults from "./SearchResults";
import { cleanGames } from "../utils"

function SearchPage({ findStoreIcon }) {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  const findGames = (filterOptions) => {
    let urlData = ""
    
    if (filterOptions && filterOptions.title) {
      urlData += `title=${filterOptions.title}&`
    }
    if (filterOptions && filterOptions.priceLimit < 50) {
      urlData += `upperPrice=${filterOptions.priceLimit}&`
    }

    setLoading(true)
    
    getDeals(urlData).then(data => {
      const cleanData = cleanGames(data)
      setResults(cleanData)
      setLoading(false)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    findGames()
  },[])

  return (
    <div className="search-page">
      <Filters findGames={findGames} />
      {!loading ? <SearchResults findStoreIcon={findStoreIcon} results={results} /> : <p>Loading Titles...</p>}
    </div>
  )
}

export default SearchPage;