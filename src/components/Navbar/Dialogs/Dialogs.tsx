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
export const Dialogs = () => {
    const stateItems = [
        {id:1, name: "Ola"},
        {id:2, name: "Viktoria"},
        {id:3, name: "Anna"},
    ];
interface postDataType {
    id: number,
    message: string,
    countLikes: number,
}

const postData: Array<postDataType> = [
        {id: 1,message: "Hi", countLikes: 1},
        {id: 2,message: "How are you", countLikes: 1}   ,
        {id: 3,message: "I'm good", countLikes: 1},
        {id: 4,message: "Glad to hear that", countLikes: 1},
    ];
    return (
        <div>
            <NameDialog>Dialog</NameDialog>
            <DialogsStyled>
                <UlList>
                    <DialogItem name={stateItems[0].name} id={stateItems[0].id}></DialogItem>
                    <DialogItem name={stateItems[1].name} id={stateItems[1].id}></DialogItem>
                    <DialogItem name={stateItems[2].name} id={stateItems[2].id}></DialogItem>
                </UlList>
                <UlList>
                    <DialogMessage message={postData[0].message}></DialogMessage>
                    <DialogMessage message={postData[1].message}></DialogMessage>
                    <DialogMessage message={postData[2].message}></DialogMessage>
                    <DialogMessage message={postData[3].message}></DialogMessage>
                </UlList>
            </DialogsStyled>
        </div>
    )
};

