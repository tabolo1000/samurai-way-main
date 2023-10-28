import React from 'react';
import {DialogsStyled, LinkStyle, LinkList, NameDialog, UlList} from "./DialogsStyled";
import {Link} from 'react-router-dom';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";


interface dialogTypeProps {
    messageData: dialogType
}
interface dialogType {
    dialogsData: Array<dialogDataType>,
    postData: Array<postDataType>
}

interface dialogDataType {
    id: number,
    name: string,
    image: string,
}

interface postDataType {
    id: number,
    message: string,
    countLikes: number,
}


export const Dialogs = (props: dialogTypeProps) => {


    const dialogsElements =
        props.messageData.dialogsData.map((item) => <DialogItem name={item.name} id={item.id} image={item.image}></DialogItem>);


    const messageElements =
        props.messageData.postData.map((item) => <DialogMessage id={item.id} message={item.message}
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

