import styled from "styled-components";
import { NavLinkCustom } from "../Navbar/Navbar.styles";
import { theme } from "../../styles/theme";


//----------Styled_Components_Header------------------------------

const HeaderSection = styled.div`
  grid-area: header;
  position: fixed;
  width: 100%;
  padding: 0px 10px;
  background: ${theme.colors.headerbc};
  border-bottom: 2px groove blue;
`
const Logo = styled.svg`
  fill: ${theme.colors.logo};
  margin: 7px 40px;
  border: 2px solid ${theme.colors.logo};
  border-radius: 50%;
  background-color: #669e9c48;
`
const LoginButton = styled(NavLinkCustom)`
    padding: 10px;
`
const TextLogin = styled.p`
  ${theme.fonts};
`

//---------Export_Components-------------------------------
export const s = {
  LoginButton,
  HeaderSection,
  Logo,
  TextLogin,
}
