import React, { useEffect, useState } from "react";
import { getStoreDeals } from "../apiCalls";
import "../styles/StoreDealBox.css";
import DashboardGameCard from "./DashboardGameCard";

function StoreDealBox({ store }) {

  const [storeDeals, setStoreDeals] = useState([])

  useEffect(() => {
    console.log("store ID:", store.storeID);
    getStoreDeals(store.storeID).then(data => setStoreDeals(data))
  },[])

  return (
    <div className="store-deal-box">
      <h3>{store.storeName}</h3>
      <DashboardGameCard game={storeDeals[0]} />
      <DashboardGameCard game={storeDeals[1]} />
      <DashboardGameCard game={storeDeals[2]} />
      <DashboardGameCard game={storeDeals[3]} />
      <DashboardGameCard game={storeDeals[4]} />
    </div>
  )
}

export default StoreDealBox;