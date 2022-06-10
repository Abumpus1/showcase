import React, { useState } from "react"
import "../styles/App.css";
import Dashboard from "./Dashboard";
import Nav from "./Nav";

function App() {

  const [stores, setStores] = useState([])

  return (
    <div className="App">
      <Nav />
      <h2 className="dash-title">Top Deals by Store</h2>
      <Dashboard />
    </div>
  );
}

export default App;
