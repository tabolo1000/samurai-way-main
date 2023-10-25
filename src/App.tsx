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


function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Profile/>
    //     },
    //     {
    //         path: "/dialogs",
    //         element: <Dialogs/>
    //     },
    //     {
    //         path: "/new",
    //         element: <News/>
    //     },
    //     {
    //         path: "/music",
    //         element: <Music/>
    //     },
    //     {
    //         path: "/setting",
    //         element: <Setting/>,
    //     },
    // ])
    return (
        <AppStyled>
            <Header/>
            <Navbar/>
            <ContentStyled>
                <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                     <Route path="/news" element={<News/>}/>
                     <Route path="/music" element={<Music/>}/>
                     <Route path="/setting" element={<Setting/>}/>
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