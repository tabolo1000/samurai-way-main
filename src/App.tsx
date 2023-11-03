import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import styled from "styled-components";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Profile} from "./components/Navbar/Profile/Profile";
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {
    BrowserRouter as Router, Routes,
    createBrowserRouter, Link, Outlet,
    RouterProvider, NavLink, Route
} from "react-router-dom";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import {Setting} from "./components/Navbar/Setting/Setting";
import {Hoo} from "./components/Navbar/Hoo/Hoo";

interface propsType {
    store: stateType;

}
// interface stateType {
//     _state: dialogTypeProps;
//     addPost: (myPost:string) => number;
//     changePostTextAreaData:(letter:string) => string;
//     getState: any;
//     callSubscriber: any;
//     // callSubscriber: (state:any)=>void;
//     subscriber: (obsorver:any)=> void;
//
// }
interface stateType {
    _state: dialogTypeProps;
    addPost: (myPost: string) => void;
    changePostTextAreaData: (letter: string) => void;
    getState: () => dialogTypeProps;
}

export interface dialogTypeProps {
    messageData: dialogType;
    profileData: profileDataType;
}

export interface profileDataType {
    postsProfileData: PostProfileDataType;
}

interface PostProfileDataType {
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

interface dialogType {
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
    myMessage: Array<myMessageType>
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

function App(props: propsType) {

    const arrRoute = ['/', "/dialogs", "/news", "/music", "/setting", "/hoo"]
    const arrComponents = [
        <Profile
        addPost = {props.store.addPost.bind(props.store)}
        profileData = {props.store.getState().profileData}
     changePostTextAreaData = {props.store.changePostTextAreaData.bind(props.store)}
    />, <Dialogs

        messageData={props.store.getState().messageData}/>, <News/>, <Music/>, <Setting/>,
        <Hoo/>,]
    return (
        <AppStyled>
            <Header/>
            <Navbar/>
            <ContentStyled>
                <Routes>
                    {arrRoute.map((item, index) => {
                        return (
                            <Route path={item} element={arrComponents[index]}/>
                        )
                    })}
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