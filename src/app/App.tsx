import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { News } from "../components/Navbar/News/News";
import { Music } from "../components/Navbar/Music/Music";
import { Setting } from "../components/Navbar/Setting/Setting";
import { Hoo } from "../components/Navbar/Hoo/Hoo";
import { DialogsContainer } from "../components/Navbar/Dialogs/DialogsContainer";
import ProfileContainer from "../components/Navbar/Profile/ProfileContainer";
import UsersContainer from "../components/Navbar/Users/UsersContainer";
import AuthContainer from "../components/Header/Auth/AuthorizationContainer";
import { HeaderContainer } from "../components/Header/HeaderContainer";
import { s } from "./App.style"



function App() {
    return (
        <s.App>
            <HeaderContainer />
            <Navbar />
            <s.Main>
                <Routes>
                    <Route path={`/auth`} element={<AuthContainer />} />
                    <Route path={`/profile/:userId?`} element={<ProfileContainer />} />
                    <Route path={`/dialogs`} element={<DialogsContainer />} />
                    <Route path={`/news`} element={<News />} />
                    <Route path={`/music`} element={<Music />} />
                    <Route path={`/setting`} element={<Setting />} />
                    <Route path={`/users`} element={<UsersContainer />} />
                    <Route path={`/hoo`} element={<Hoo />} />
                </Routes>
            </s.Main>
            <Footer />
        </s.App>
    );
}


export default App;





//-----------------------Types of Entries ---------------------

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