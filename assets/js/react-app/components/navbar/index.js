import React from "react";

export const NavLink = props => {
  const { text, href } = props;
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};

export default props => {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
};
