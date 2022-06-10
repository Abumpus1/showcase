import React from "react";
import "../styles/StoreDealBox.css";
import DashboardGameCard from "./DashboardGameCard";

function StoreDealBox() {
  return (
    <div className="store-deal-box">
      <h3>Store Name Here</h3>
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
    </div>
  )
}

export default StoreDealBox;