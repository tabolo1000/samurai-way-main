import styled from "styled-components";
import { theme } from "../../../styles/theme";
import imageBG from "../../../assets/image/image1.jpeg"



export const ImageBackGroundStyled = styled.div`
  background-color: #415170;
  background-image: url(${imageBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 2px 5px #415170, -2px -2px 5px #415170;
  border: 2px solid #415170;
  min-height: 100px;
`



//-----------------Style_Profile----------------------------------

export const MainProfile = styled.div`
  grid-area: content;
  background-color: ${theme.colors.backgorundSection};
  min-height: calc(100vh - 80px);
  border: 2px solid ${theme.colors.backgorundSection};
  padding: 10px;
  border-radius: 20px;
  line-height: 40px;
`


//-----------------Style_Export------------------------------------
export const s = {
  MainProfile
}