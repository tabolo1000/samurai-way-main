import React from 'react';
import {LiStyled, SidebarStyled, UlStyled} from "./NavbarStyled";
import {Link} from "react-router-dom";

export const Navbar = () => {
//     const menu = {
//         name:["/", "message", "/new", "music", "dialogs"],
//         nameLink: ["Profile", "Message", "New", "Music", "Dialog"]
//
// }
const menu = ["/", "/dialogs", "/news", "/music", "/dialogs"];
const name = ["Profile","Message","New","Music", "Setting"]





    return (
        <SidebarStyled>
            <UlStyled>
                {menu.map((item, index)=>{
                    return(
                    <LiStyled><Link to={`${item}`}>{name[index]}</Link></LiStyled>)
                })}
                {/*<LiStyled><Link to={`/message`}>Message</Link></LiStyled>*/}
                {/*<LiStyled><Link to={"/new"}>New</Link></LiStyled>*/}
                {/*<LiStyled><Link to={"/music"}>Music</Link></LiStyled>*/}
                {/*<LiStyled><Link to={"/dialogs"}>Setting</Link></LiStyled>*/}
            </UlStyled>
        </SidebarStyled>
    );
};


