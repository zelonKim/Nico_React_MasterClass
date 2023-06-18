/* 
import React from "react";
import Router from "./Router";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App; 
*/

/////////////////////

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header /> 
      <Outlet context={{ darkMode: true }}/>
    </div>
  );
}

export default App;