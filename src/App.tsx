import React from 'react';
import './App.css';
import styled from "styled-components";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";

import {
    BrowserRouter as Router, Routes,
    createBrowserRouter, Link, Outlet,
    RouterProvider, NavLink, Route
} from "react-router-dom";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import {Setting} from "./components/Navbar/Setting/Setting";
import {Hoo} from "./components/Navbar/Hoo/Hoo";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import AuthorizationContainer from "./components/Header/Auth/AuthorizationContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";


export interface propsType {
    store: stateType;
}
export interface stateType {
    dispatch: (action: any) => void;
    getState: () => dialogTypeProps;
}

export interface dialogTypeProps {
    messageData: dialogType;
    profileData: profileDataType;
}
export interface profileDataType {
    postsProfileData: PostProfileDataType;
}

export interface PostProfileDataType {
    profileInfo: profileInfoType;
    allMyPosts: Array<allMyPropsType>
    postTextAreaData: postTextAreaDataType
}

interface postTextAreaDataType {
    letter: string;
}

export interface profileInfoType {
    img: string,
    name: string,
    date: string,
    city: string,
    education: string,
    webSite: string;
}

export interface allMyPropsType {
    id: number;
    message: string;
    image: string;
}

export interface dialogType {
    dialogsData: Array<dialogDataType>,
    postData: postDataType
}

interface dialogDataType {
    id: number,
    name: string,
    image: string,
}

interface postDataType {
    otherUsersMessage: Array<otherUsersMessageType>,
    myMessage: Array<myMessageType>,
    dialogTextArea: any,
}

interface otherUsersMessageType {
    id: number,
    message: string,
    countLikes: number,
    timeMessage: number,
    isItMyMessage: boolean,
}

interface myMessageType {
    id: number,
    message: string,
    countLikes: number,
    timeMessage: number,
    isItMyMessage: boolean,
}

function App() {
    return (
        <AppStyled>
            <HeaderContainer/>
            <Navbar/>
            <ContentStyled>
                <Routes>
                    <Route path = {`/auth`} element = {<AuthorizationContainer/>}/>
                    <Route path={`/profile/:userId?`} element={<ProfileContainer />}/>
                    <Route path={`/dialogs`} element={<DialogsContainer />}/>
                    <Route path={`/news`} element={<News/>}/>
                    <Route path={`/music`} element={<Music/>}/>
                    <Route path={`/setting`} element={<Setting/>}/>
                    <Route path={`/users`} element={<UsersContainer/>}/>
                     <Route path={`/hoo`} element={<Hoo/>}/>
                </Routes>
            </ContentStyled>
            <Footer/>
        </AppStyled>
    );
}


export default App;

const AppStyled = styled.div`
  display: grid;
  grid-template-areas:
  "header header header"
  "sidebar content content"
  "footer footer footer";

  grid-template-rows:  60px 1fr;
  grid-template-columns: 2fr 10fr;
`
const ContentStyled = styled.div`
  grid-area: content;
`