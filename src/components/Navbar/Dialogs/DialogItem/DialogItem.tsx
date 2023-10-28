import React from "react";
import {LinkList, LinkListRight, LinkStyle} from "../DialogsStyled";
import {Avatar} from "../../../../style/GlobalStyle";


interface DialogsItemProps {
    name: string,
    id: number,
    image: string,
}

export const DialogItem = (props: DialogsItemProps) => {
    const path = "dialogs" + props.id;
    return (
        <>
            <Avatar src={props.image} alt=""/>
            <LinkList><LinkStyle to={path}>{props.name}</LinkStyle></LinkList>
        </>
    )
}