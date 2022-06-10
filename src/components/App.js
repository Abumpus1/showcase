import React, { useEffect, useState } from "react"
import { getAllStores } from "../apiCalls";
import "../styles/App.css";
import Dashboard from "./Dashboard";
import Nav from "./Nav";

function App() {

  const [stores, setStores] = useState([])

  useEffect(() => {
    getAllStores().then(data => setStores(data))
  },[])

  return (
    <div className="App">
      <Nav />
      <h2 className="dash-title">Top Deals by Store ({stores.length})</h2>
      {!!stores.length ? <Dashboard stores={stores} /> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;
