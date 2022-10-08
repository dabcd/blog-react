import React from "react";
import { Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <div>
      <h1>My travel locations:</h1>
      <Outlet />
    </div>
  );
}
