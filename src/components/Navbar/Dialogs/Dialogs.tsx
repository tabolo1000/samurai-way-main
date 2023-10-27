import React from 'react';
import {DialogsStyled, LinkStyle, LinkList, NameDialog, UlList} from "./DialogsStyled";
import {Link} from 'react-router-dom';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";


export const Dialogs = () => {
    interface DialogsType {
        id: number,
        name: string,
    }

    const dialogs: Array<DialogsType> = [
        {id: 1, name: "Ola"},
        {id: 2, name: "Viktoria"},
        {id: 3, name: "Anna"},
    ];

    const dialogsElements =
        dialogs.map((item) => <DialogItem name={item.name} id={item.id}></DialogItem>);




    interface PostDataType {
        id: number,
        message: string,
        countLikes: number,
    }

    const postData: Array<PostDataType> = [
        {id: 1, message: "Hi", countLikes: 1},
        {id: 2, message: "How are you", countLikes: 1},
        {id: 3, message: "I'm good", countLikes: 1},
        {id: 4, message: "Glad to hear that", countLikes: 1},
    ];

    const messageElements =
        postData.map((item) => <DialogMessage id={item.id} message={item.message}
                                              countLikes={item.countLikes}></DialogMessage>);


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

