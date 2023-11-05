import React from 'react';
import {DialogsStyled, LinkStyle, NameDialog, UlList} from "./DialogsStyled";
import {Link} from 'react-router-dom';
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {FlexWrapper} from "../../FlexWrapper";
import {addMessageActionCreator, changeDialogTextAreaCreator} from "../../../store/state";


interface dialogTypeProps {
    messageData: dialogType;
    dispatch: (action: any) => void;
}

interface dialogType {
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


export const Dialogs = (props: dialogTypeProps) => {


    const dialogsElements =
        props.messageData.dialogsData.map((item) => <DialogItem name={item.name} id={item.id}
                                                                image={item.image}></DialogItem>);


    const otherMessage =
        props.messageData.postData.otherUsersMessage.map((item) => <DialogMessage id={item.id} message={item.message}
                                                                                  timeMessage={item.timeMessage}
                                                                                  isItMyMessage={item.isItMyMessage}
                                                                                  countLikes={item.countLikes}></DialogMessage>)
    ;

    const myMessage =
        props.messageData.postData.myMessage.map((item) => <DialogMessage id={item.id} message={item.message}
                                                                          timeMessage={item.timeMessage}
                                                                          isItMyMessage={item.isItMyMessage}
                                                                          countLikes={item.countLikes}
        ></DialogMessage>);

    const allMessage = [...otherMessage, ...myMessage].sort((a, b) => a.props.timeMessage > b.props.timeMessage ? 1 : -1);

    const createRefMainPost = React.useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        if (createRefMainPost.current !== null) {
            let message = createRefMainPost.current.value
            props.dispatch(addMessageActionCreator(message))
        }
    }

    const changeDialogTextArea = () => {
        if (createRefMainPost.current !== null) {
            let letter = createRefMainPost.current.value
            props.dispatch(changeDialogTextAreaCreator(letter))
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
                              value={props.messageData.postData.dialogTextArea.textMessage}></textarea>
                    <button onClick={() => {
                        addMessage()
                    }}>Click
                    </button>
                </UlList>
            </DialogsStyled>
        </div>
    )
};

