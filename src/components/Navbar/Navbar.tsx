import React from 'react';
import {FriendStyled, LiStyled, NavlinkStyled, SidebarStyled, UlStyled, WrapperGrid} from "./NavbarStyled";
import {Link} from "react-router-dom";
import {FlexWrapper} from "../FlexWrapper";
import {AvatarLittle} from "../../style/GlobalStyle";

interface dialogTypeProps {
    dialog: dialogType
}

interface dialogType {
    dialogsData: Array<dialogDataType>,
    postData: Array<postDataType>
}

interface dialogDataType {
    id: number,
    name: string,
}

interface postDataType {
    id: number,
    message: string,
    countLikes: number,
}

export const Navbar = () => {
    const menu = ["/", "/dialogs", "/news", "/music", "/setting", "/users", "/hoo"];
    const name = ["Profile", "Message", "New", "Music", "Setting", "Users", "Hoo"]
    const arrayNavbar = menu.map((item, index) => {
        return (
            <LiStyled>
                <NavlinkStyled to={`${item}`}>{name[index]}
                </NavlinkStyled>
            </LiStyled>
        )})

    return (
        <SidebarStyled>
            <UlStyled>
                {menu.map((item, index) => {
                    return (
                        <LiStyled><NavlinkStyled to={`${item}`}>{name[index]}</NavlinkStyled></LiStyled>)
                })}
            </UlStyled>

            <WrapperGrid>
                    <FriendStyled>
                        <NavlinkStyled to={`/friends`}>{"Friends"}</NavlinkStyled>
                    </FriendStyled>
                    <AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/>
                    <AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/><AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/><AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/>
                    <AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/>
                    <AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/><AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/><AvatarLittle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5w5ghtl6EAaVcfkPvw01kGw6lh_iM1u-C9w&usqp=CAU" alt=""/>

            </WrapperGrid>

        </SidebarStyled>
    );
};



