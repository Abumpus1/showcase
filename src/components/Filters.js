import React, { useState } from "react";
import "../styles/Filters.css";

function Filters() {

  const [searchInput, setSearchInput] = useState("")

  return (
    <form className="filters">
      <div className="title-box">
        <label className="title-search-label" for="title-search">TITLE:</label>
        <input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} name="title-search" placeholder="Search By Title..." className="title-search" type="text"/>
      </div>
    </form>
  )
}

export default Filters;