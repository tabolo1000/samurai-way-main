import React from 'react';
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";
import {LiStyled, SidebarStyled, UlStyled} from "./NavbarStyled";

export const Navbar = () => {
    return (
        <SidebarStyled>
            <UlStyled>
                <LiStyled>Profile</LiStyled>
                <LiStyled>Message</LiStyled>
                <LiStyled>New</LiStyled>
                <LiStyled>Music</LiStyled>
                <LiStyled>Setting</LiStyled>
            </UlStyled>
        </SidebarStyled>
    );
};


