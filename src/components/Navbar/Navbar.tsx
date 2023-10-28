import React from 'react';
import {LiStyled, NavlinkStyled, SidebarStyled, UlStyled} from "./NavbarStyled";
import {Link} from "react-router-dom";

  interface dialogTypeProps {
        dialog: dialogType
    }
    interface dialogType {
        dialogsData: Array<dialogDataType>,
        postData: Array<postDataType>
    }

    interface dialogDataType{
        id: number,
        name: string,
    }
    interface postDataType {
        id: number,
        message: string,
        countLikes: number,
    }
export const Navbar = (props: dialogTypeProps) => {
    const menu = ["/", "/dialogs", "/news", "/music", "/setting"];
    const name = ["Profile","Message","New","Music", "Setting"]
const arrayNavbar = menu.map((item, index)=>{
                    return(
                    <LiStyled><NavlinkStyled to={`${item}`}>{name[index]}</NavlinkStyled></LiStyled>)
                })



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



