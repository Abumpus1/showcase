import React from "react";
import "../styles/StoreDealBox.css";
import DashboardGameCard from "./DashboardGameCard";

function StoreDealBox({ store }) {
  return (
    <div className="store-deal-box">
      <h3>{store.storeName}</h3>
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
    </div>
  )
}

export default StoreDealBox;