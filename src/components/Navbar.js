import React from "react";
import { Link } from "gatsby";

const NavLink = ({ to, children }) => (
  <Link to={to}>
    <h3 style={{ display: "inline" }}>{children}</h3>
  </Link>
);

export default () => (
  <div>
    <NavLink to="/">Omkar</NavLink>
    <NavLink to="/writing">Writing</NavLink>
    <NavLink to="/projects">Projects</NavLink>
  </div>
);
