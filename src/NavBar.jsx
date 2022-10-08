import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function NavBar({ data }) {
  let dropdown = null;
  if (data) {
    dropdown = data.map((elem) => (
      <NavLink to={`posts/${elem.id}`} key={elem.id}>
        {elem.title}
      </NavLink>
    ));
  }

  return (
    <nav className="Navigation">
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
      </div>
      <div className="dropdown">
        <NavLink to="posts" className="dropbtn">
          Travel locations ▾
        </NavLink>
        <div className="dropdown-content">{dropdown}</div>
      </div>
      <div>
        <NavLink to="about">About</NavLink>
      </div>
    </nav>
  );
}
