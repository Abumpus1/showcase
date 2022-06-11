import React, { useEffect, useState } from "react";
import { getStoreDeals } from "../apiCalls";
import "../styles/StoreDealBox.css";
import DashboardGameCard from "./DashboardGameCard";

function StoreDealBox({ store }) {

  const [storeDeals, setStoreDeals] = useState([])

  useEffect(() => {
    getStoreDeals(store.storeID).then(data => setStoreDeals(data))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="store-deal-box">
      <img src={`https://www.cheapshark.com${store.images.banner}`} alt={store.storeName}/>
      {
        !!storeDeals.length ? 
        <>
          <DashboardGameCard game={storeDeals[0]} />
          <DashboardGameCard game={storeDeals[1]} />
          <DashboardGameCard game={storeDeals[2]} />
          <DashboardGameCard game={storeDeals[3]} />
          <DashboardGameCard game={storeDeals[4]} />
        </> 
        : <h3>Loading Games...</h3>
      }
    </div>
  )
}

export default StoreDealBox;