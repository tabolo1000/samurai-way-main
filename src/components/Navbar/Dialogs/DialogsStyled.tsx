import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../styles/theme";





export const LinkListLeft = styled.li`
     padding: 10px;
     font-size: 20px;
  color: ${theme.fonts};
    `

export const LinkListRight = styled.li`
  padding: 10px;
  font-size: 20px;
  text-align: right;
  color: ${theme.fonts};
`
export const LinkList = styled.li`
     font-size: 20px;
    `
export const NameDialog = styled.h2`
  padding: 0 0px;
  color: ${theme.fonts};
  font-size: 25px;
`



//-------------------Style_for_Dialogs-------------------------------

const MainDialogs = styled.div`
  padding: 20px;
`
const TypeBox = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  bottom: 2%;
  right: 23%;
  textarea {
    display: inline;
    width: 500px;
  }
  @media screen and (max-width: 920px) {
    textarea {
    width: 200px;
  }
  }
`;

const Сorrespondence = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: #00000089;
  border-radius: 20px;
  padding: 20px;
  min-height: calc(100vh - 110px);
`



//-------------------------Style_for_Dialog_Item--------------------

export const LinkName = styled(Link)`
     padding: 10px;
     font-size: 20px;
     
`

//-------------------------Style_for_export--------------------------

export const s = {
  TypeBox,
  MainDialogs,
  Сorrespondence,
  LinkName,
}