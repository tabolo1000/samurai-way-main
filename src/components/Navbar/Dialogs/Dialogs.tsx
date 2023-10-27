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
    const dialogs = [
        {id:1, name: "Ola"},
        {id:2, name: "Viktoria"},
        {id:3, name: "Anna"},
    ];
interface PostDataType {
    id: number,
    message: string,
    countLikes: number,
}

const postData: Array<PostDataType> = [
        {id: 1,message: "Hi", countLikes: 1},
        {id: 2,message: "How are you", countLikes: 1}   ,
        {id: 3,message: "I'm good", countLikes: 1},
        {id: 4,message: "Glad to hear that", countLikes: 1},
    ];
const dialogsElements =
    dialogs.map((item:DialogsItemProps) => <DialogItem name={item.name} id={item.id}></DialogItem>);

const messageElements =
    postData.map((item:PostDataType) => <DialogMessage message={item.message}></DialogMessage>)


    return (
        <div>
            <NameDialog>Dialog</NameDialog>
            <DialogsStyled>
                <UlList>
                    {dialogsElements}
                </UlList>
                <UlList>
                    {messageElements}
                </UlList>
            </DialogsStyled>
        </div>
    )
};

