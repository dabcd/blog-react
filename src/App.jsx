import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function App({ data }) {
  return (
    <div className="App">
      <NavBar data={data} />
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}
