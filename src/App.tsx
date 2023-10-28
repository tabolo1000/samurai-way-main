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

const state = {
    dialog:{
        dialogsData: [
            {id: 1, name: "Ola"},
            {id: 2, name: "Viktoria"},
            {id: 3, name: "Anna"},
        ],
        postData: [
            {id: 1, message: "Hi", countLikes: 1},
            {id: 2, message: "How are you", countLikes: 1},
            {id: 3, message: "I'm good", countLikes: 1},
            {id: 4, message: "Glad to hear that", countLikes: 1},
        ]
    }

}
function App() {



    const arrRoute = ['/',"/dialogs","/news","/music","/setting"]
    const arrComponents =[<Profile/>, <Dialogs dialogs = {state.dialog}/>, <News/>, <Music/>, <Setting/>]
    return (
        <AppStyled>
            <Header/>
            <Navbar dialog = {state.dialog}/>
            <ContentStyled>
                <Routes>
                    {arrRoute.map((item, index)=>{
                        return(
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