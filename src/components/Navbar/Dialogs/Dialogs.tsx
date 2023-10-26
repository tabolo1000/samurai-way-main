import React from 'react';
import {DialogsStyled, LinkStyle, LinkList, NameDialog, UlList} from "./DialogsStyled";
import {Link} from 'react-router-dom';


interface DialogsItemProps {
    name: string,
    id: number,
}
const DialogItem = (props: DialogsItemProps) => {
    const path = "dialogs" + props.id;
    return(
        <LinkList><LinkStyle to ={path}>{props.name}</LinkStyle></LinkList>
    )
}
interface DialogsMessageProps {
    message: string,
}

const DialogMessage = (props: DialogsMessageProps) => {
    return(
     <LinkList>{props.message}</LinkList>
    )
}
export const Dialogs = (god: any) => {
    debugger;
    return (
        <div>
            <NameDialog>Dialog</NameDialog>
            <DialogsStyled>
                <UlList>
                    <DialogItem name={"Ola"} id={1}></DialogItem>
                    <DialogItem name={"Viktoria"} id={2}></DialogItem>
                    <DialogItem name={"Anna"} id={3}></DialogItem>
                </UlList>
                <UlList>
                    <DialogMessage message={"Hi"}></DialogMessage>
                    <DialogMessage message={"How are you"}></DialogMessage>
                    <DialogMessage message={"I'm good."}></DialogMessage>
                    <DialogMessage message={"Glad to hear it."}></DialogMessage>
                </UlList>
            </DialogsStyled>
        </div>
    )
};

