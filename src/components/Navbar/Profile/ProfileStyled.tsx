import styled from "styled-components";



export const ImageBackGroundStyled = styled.div`
  background-color: cornflowerblue;
  background-image: url('https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D');
  //background-image: url(../../image/images.jpeg) ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center, right;
  
  
  width: 100%;
  height: 100px;
`



//------

export const MainProfile = styled.div`
  grid-area: content;
`

export const s = {
  MainProfile
}