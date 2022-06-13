import React, { useEffect, useState } from "react"
import { Switch } from "react-router-dom";
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

  const findStoreIcon = (storeID) => {
    const urlPath = stores.find(store => store.storeID === storeID).images.icon
    return `https://www.cheapshark.com${urlPath}`
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <h2 className="dash-title">Top Deals by Store</h2>
          {!!stores.length ? <Dashboard stores={stores} /> : <h2>Loading...</h2>}
        </Route>
        <Route path="/search">
          <h2 className="search-title">Search All Deals</h2>
          {!!stores.length ? <SearchPage findStoreIcon={findStoreIcon} /> : <h3>Loading...</h3>}
        </Route>
        <Route path="*">
          <h3 className="bad-url-text">Error 404, Page not found.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
