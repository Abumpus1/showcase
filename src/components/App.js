import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom";
import { getAllStores } from "../apiCalls";
import "../styles/App.css";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import SearchPage from "./SearchPage";

function App() {

  const [stores, setStores] = useState([])

  useEffect(() => {
    getAllStores().then(data => setStores(data))
    .catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <h2 className="dash-title">Top Deals by Store</h2>
        {!!stores.length ? <Dashboard stores={stores} /> : <h2>Loading...</h2>}
      </Route>
      <Route path="/search">
        <h2 className="search-title">Search All Deals</h2>
        <SearchPage />
      </Route>
    </div>
  );
}

export default App;
