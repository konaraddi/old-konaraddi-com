import React from "react";

export default ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <b>{children}</b> &#8599;
  </a>
);
