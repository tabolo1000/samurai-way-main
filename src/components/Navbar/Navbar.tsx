import React from 'react';
import {LiStyled, NavlinkStyled, SidebarStyled, UlStyled} from "./NavbarStyled";
import {Link} from "react-router-dom";

export const Navbar = () => {

const menu = ["/", "/dialogs", "/news", "/music", "/setting"];
const name = ["Profile","Message","New","Music", "Setting"]


    return (
        <SidebarStyled>
            <UlStyled>
                {menu.map((item, index)=>{
                    return(
                    <LiStyled><NavlinkStyled to={`${item}`}>{name[index]}</NavlinkStyled></LiStyled>)
                })}
            </UlStyled>
        </SidebarStyled>
    );
};



