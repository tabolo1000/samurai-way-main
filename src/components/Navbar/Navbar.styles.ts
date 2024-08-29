import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";


//----------Styled_Components_Common------------------------------

export const NavLinkCustom = styled(Link)`
  ${theme.fonts};
  
  &:hover {
    color: #b2aaa6;
   }
`
//----------Styled_Components_Navbar------------------------------

const Sidebar = styled.div`
    grid-area: sidebar;
    position: fixed;
    top: 54px;
    width: calc(100%/12*2);
    height: calc(100vh - 55px);
    background-color: #3b546a87;
`
const NavList = styled.ul`
 `

 const NavItem = styled.li`
  padding: 10px;
  ${theme.fonts}
`;

const Friends = styled.div`
  background-color: #7e525288;
  display: grid;
  grid-template-columns: repeat(3, 45px);
  grid-template-rows: repeat(3, 45px);
  grid-column-gap: 10px;
  justify-items: center;
  align-items: center;
  padding: 5px 5px 10px;
  border-radius: 10px;
`

const FriendItem = styled(NavItem)`
      text-align: center;
      grid-column-start: 1;
      grid-column-end: 4;
      padding-bottom: 0;
      margin-bottom: 0;
 `



//---------Export_Components-------------------------------

export const s = {
  NavItem,
  NavLinkCustom,
  Sidebar,
  NavList,
  Friends,
  FriendItem,
}