import React from 'react';
import {DialogsStyled, LinkStyle, NameDialog, UlList} from "./DialogsStyled";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {redirect} from "react-router-dom";
import {Auth} from "../../Header/Auth/Auth";
import AuthReducer from "../../../store/authReducer";


/*interface dialogPropsType {
    state: dialogType;
    sendMessage: (message: string) => void;
    upDateNewMessageBody: (message: string) => void;
}






*/

export interface dialogTypeProps {
    dialogsData: dialogDataType[],
    postData: postDataType,
    isAuth: boolean,
    sendMessage: any,
    upDateNewMessageBody: any,
}

interface postDataType {
    otherUsersMessage: Array<otherUsersMessageType>,
    myMessage: Array<myMessageType>,
    dialogTextArea: dialogTextAreaType
}

interface dialogDataType {
    id: number,
    name: string,
    image: string,
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


export const Dialogs = ({ 
    dialogsData,
    postData,
    isAuth,
    sendMessage,
    upDateNewMessageBody
} ) => {
    alert(isAuth)
    const dialogsElements =
        props.dialogsData.map((item: any) => <DialogItem name={item.name} id={item.id}
                                                         image={item.image}></DialogItem>);


    const otherMessage =
        postData.otherUsersMessage.map((item: any) => <DialogMessage id={item.id} message={item.message}
                                                                           timeMessage={item.timeMessage}
                                                                           isItMyMessage={item.isItMyMessage}
                                                                           countLikes={item.countLikes}></DialogMessage>)
    ;

    const myMessage =
        postData.myMessage.map((item: any) => <DialogMessage id={item.id} message={item.message}
                                                                   timeMessage={item.timeMessage}
                                                                   isItMyMessage={item.isItMyMessage}
                                                                   countLikes={item.countLikes}
        ></DialogMessage>);

    const allMessage = [...otherMessage, ...myMessage].sort((a, b) => a.props.timeMessage > b.props.timeMessage ? 1 : -1);

    const createRefMainPost = React.useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        if (createRefMainPost.current !== null) {
            let message = createRefMainPost.current.value
            sendMessage(message)
        }
    }

    const changeDialogTextArea = () => {
        if (createRefMainPost.current !== null) {
            let message = createRefMainPost.current.value
            upDateNewMessageBody(message)
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
                              placeholder="Input your text!"
                              value={postData.dialogTextArea.textMessage}></textarea>
                    <button onClick={() => {
                        addMessage()
                    }}>Click
                    </button>
                </UlList>
            </DialogsStyled>
        </div>
    )
};

