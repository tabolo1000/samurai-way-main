import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import styled from "styled-components";

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

const SidebarStyled = styled.div`
    grid-area: sidebar;
`

const UlStyled = styled.ul`
      list-style: none;
    `

const LiStyled = styled.li`
      margin: 10px;
      font-size: 1.5rem;
    `