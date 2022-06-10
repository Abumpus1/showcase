import React from "react";
import "../styles/StoreDealBox.css";
import DashboardGameCard from "./DashboardGameCard";

function StoreDealBox() {
  return (
    <div className="store-deal-box">
      Hello Deal Box
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
      <DashboardGameCard />
    </div>
  )
}

export default StoreDealBox;