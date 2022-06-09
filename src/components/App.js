import React, { useState } from "react"
import "../styles/App.css";
import Dashboard from "./Dashboard";
import Nav from "./Nav";

function App() {

  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
