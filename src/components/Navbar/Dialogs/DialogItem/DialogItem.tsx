import React from "react";
import {LinkList, LinkStyle} from "../DialogsStyled";


interface DialogsItemProps {
    name: string,
    id: number,
}
export const DialogItem = (props: DialogsItemProps) => {
    const path = "dialogs" + props.id;
    return(
        <LinkList><LinkStyle to ={path}>{props.name}</LinkStyle></LinkList>
    )
}