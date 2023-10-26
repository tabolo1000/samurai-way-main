import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";

export const SidebarStyled = styled.div`
    grid-area: sidebar;
`

export const UlStyled = styled.ul`
      list-style: none;
    `

export const LiStyled = styled.li`
      margin: 10px;
      font-size: 1.5rem;
`;

export const NavlinkStyled = styled(Link)`
  text-decoration: none;
  background-image: linear-gradient(200deg, #bfff00, #003cff);
  -webkit-background-clip: text;
  color: transparent;

  &:hover {
    text-decoration: underline;
    color: #ff4d00;
    transition-delay: 0.1s;
  }
`