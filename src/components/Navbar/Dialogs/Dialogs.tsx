import React from 'react';
import {DialogsStyled, LinkStyle, NameDialog, UlList} from "./DialogsStyled";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {dialogTypeProps} from "../../../App";




interface dialogPropsType {
    state: dialogType;
    sendMessage: (message: string) => void;
    upDateNewMessageBody: (message: string) => void;
}



export interface dialogType {
    dialogsData: Array<dialogDataType>,
    postData: postDataType,
}

interface dialogDataType {
    id: number,
    name: string,
    image: string,
}

interface postDataType {
    otherUsersMessage: Array<otherUsersMessageType>,
    myMessage: Array<myMessageType>,
    dialogTextArea: dialogTextAreaType
}

interface dialogTextAreaType {
    textMessage: string;
}

interface otherUsersMessageType {
    id: number,
    message: string,
    countLikes: number,
    timeMessage: number,
    isItMyMessage: boolean,
}

interface myMessageType {
    id: number,
    message: string,
    countLikes: number,
    timeMessage: number,
    isItMyMessage: boolean,
}



export const Dialogs = (props: dialogPropsType) => {

    const dialogsElements =
        props.state.dialogsData.map((item) => <DialogItem name={item.name} id={item.id}
                                                                image={item.image}></DialogItem>);


    const otherMessage =
        props.state.postData.otherUsersMessage.map((item) => <DialogMessage id={item.id} message={item.message} timeMessage={item.timeMessage} isItMyMessage={item.isItMyMessage} countLikes={item.countLikes}></DialogMessage>)
    ;

    const myMessage =
        props.state.postData.myMessage.map((item) => <DialogMessage id={item.id} message={item.message} timeMessage={item.timeMessage} isItMyMessage={item.isItMyMessage} countLikes={item.countLikes}
        ></DialogMessage>);

    const allMessage = [...otherMessage, ...myMessage].sort((a, b) => a.props.timeMessage > b.props.timeMessage ? 1 : -1);

    const createRefMainPost = React.useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        if (createRefMainPost.current !== null) {
            let message = createRefMainPost.current.value
            props.sendMessage(message)
        }
    }

    const changeDialogTextArea = () => {
        if (createRefMainPost.current !== null) {
            let message = createRefMainPost.current.value
            props.upDateNewMessageBody(message)
        }
    }

    return (
        <div>
            <NameDialog>Dialog</NameDialog>
            <DialogsStyled>
                <UlList>
                    {dialogsElements}
                </UlList>
                <UlList>
                    {allMessage}
                    <textarea onChange={changeDialogTextArea} name="q" ref={createRefMainPost} cols={30} rows={10}
                              value={props.state.postData.dialogTextArea.textMessage}></textarea>
                    <button onClick={() => {
                        addMessage()
                    }}>Click
                    </button>
                </UlList>
            </DialogsStyled>
        </div>
    )
};

