import React from 'react';
import styled from "styled-components";
import avatar from "../../../image/avatar-3-evil-navi-james-cameron.jpg";
import beach from "../../../image/images.jpeg"
import {MyPosts} from "./MyPosts/MyPosts"
export const Profile = () => {
    return (
        <ContentStyled>
            <ImageBackGroundStyled/>
            <div>
                <ImageAvatarStyled src={beach}/>
                <h2>Nik Tabola</h2>
                <h3>Date of Birth: 2 January</h3>
                <h3>City: Minsk</h3>
                <h3>Education: <span>BSU'11</span></h3>
                <h3>Web Site: <span>https://</span></h3>
            </div>
           <MyPosts/>
        </ContentStyled>
    );
};

const ImageAvatarStyled = styled.img`
  //background-size: contain;
  width: 200px;
`

const ImageBackGroundStyled = styled.div`
  background-color: cornflowerblue;
  background-image: url('https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8fDA%3D');
  //background-image: url(../../image/images.jpeg) ;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center, right;
  
  
  width: 100%;
  height: 100px;
`

const ContentStyled = styled.div`
  grid-area: content;
`