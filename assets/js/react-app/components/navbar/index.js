import React from "react";
import styled from "styled-components";

import color from "../../styles/colors";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  display: inline;
  padding: 5px;
`;

const Link = styled.a`
  color: ${color.red};
  &:hover {
    color: ${color.green};
  }
`;

export const NavLink = props => {
  const { text, href } = props;
  return (
    <NavListItem>
      <Link href={href}>{text}</Link>
    </NavListItem>
  );
};

export default props => {
  return (
    <nav>
      <NavList>{props.children}</NavList>
    </nav>
  );
};
