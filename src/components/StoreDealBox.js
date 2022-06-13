import React, { useEffect, useState } from "react";
import { getStoreDeals } from "../apiCalls";
import "../styles/StoreDealBox.css";
import DashboardGameCard from "./DashboardGameCard";
import { cleanDashGames } from "../utils"
import PropTypes from "prop-types";

function StoreDealBox({ store }) {

  const [storeDeals, setStoreDeals] = useState([])

  useEffect(() => {
    getStoreDeals(store.storeID).then(data => {
      const cleanData = cleanDashGames(data)
      setStoreDeals(cleanData)
    })
    .catch(error => console.log(error))
  },[])

  return (
    <div className="store-deal-box">
      <img src={`https://www.cheapshark.com${store.images.banner}`} alt={store.storeName}/>
      {
        !!storeDeals.length ? 
        <>
          <DashboardGameCard {...storeDeals[0]} />
          <DashboardGameCard {...storeDeals[1]} />
          <DashboardGameCard {...storeDeals[2]} />
          <DashboardGameCard {...storeDeals[3]} />
          <DashboardGameCard {...storeDeals[4]} />
        </> 
        : <h3>Loading Titles...</h3>
      }
    </div>
  )
}

export default StoreDealBox;

StoreDealBox.propTypes = {
  store: PropTypes.object
}