import styled from "styled-components";
import {Link} from "react-router-dom";

export const DialogsStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`

export const UlList = styled.ul`
    text-decoration: none;
    `

export const LinkStyle = styled(Link)`
     padding: 10px;
     font-size: 20px;
     text-decoration: none;
    `

export const LinkList = styled.li`
     padding: 10px;
     font-size: 20px;
     list-style: none;
  text-decoration: none;
    `
export const NameDialog = styled.h2`
  padding: 0 100px;
  background-image: conic-gradient(#1aff00, #00ffbb);
  -webkit-background-clip: text;
  color: transparent;

`