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
  list-style: none;
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
// export const FriendStyled = styled.div`
//
//     `
export const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 45px 45px 45px;
  grid-template-rows: 45px 45px 45px;
  grid-gap: 0 10px;
  justify-items: center;
  width: 40%;
`

export const FriendStyled = styled(LiStyled)`
      text-align: center;
      grid-column-start: 1;
      grid-column-end: 4;
      padding-bottom: 0;
      margin-bottom: 0;
    `