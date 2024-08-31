import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { News } from "../components/Navbar/News/News";
import { Music } from "../components/Navbar/Music/Music";
import { Setting } from "../components/Navbar/Setting/Setting";
import DialogsContainer from "../components/Navbar/Dialogs/DialogsContainer";
import ProfileContainer from "../components/Navbar/Profile/ProfileContainer";
import UsersContainer from "../components/Navbar/Users/UsersContainer";
import AuthContainer from "../components/Header/Auth/AuthorizationContainer";
import { HeaderContainer } from "../components/Header/HeaderContainer";
import { s } from "./App.style";



function App() {
    return (
        <s.App>
            <HeaderContainer />
            <Navbar />
            <s.Main>
                <Routes>
                    <Route path={`/:userId?`} element={<ProfileContainer />} />
                    <Route path={`/auth`} element={<AuthContainer />} />
                    <Route path={`/dialogs`} element={<DialogsContainer />} />
                    <Route path={`/news`} element={<News />} />
                    <Route path={`/music`} element={<Music />} />
                    <Route path={`/setting`} element={<Setting />} />
                    <Route path={`/users`} element={<UsersContainer />} />
                </Routes>
            </s.Main>
            <Footer />
        </s.App>
    );
}


export default App;





//-----------------------Types of Entries ---------------------




export interface allMyPropsType {
    id: number;
    message: string;
    image: string;
}





