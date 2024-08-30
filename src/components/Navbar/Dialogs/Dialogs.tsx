import React, { ChangeEvent, Component } from 'react';
import { NameDialog } from "./DialogsStyled";
import { DialogItem } from "./DialogItem/DialogItem";
import { DialogMessage } from "./DialogMessage/DialogMessage";
import { Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { s } from "./DialogsStyled";



export class Dialogs extends Component<DialogProps> {

    render(): React.ReactNode {

        const {
            dialogsData,
            postData,
            sendMessage,
            upDateNewMessageBody,
        } = this.props

        const dialogsElements =
            dialogsData.map((item) => (
                <DialogItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                />
            )
            )
        const otherMessage =
            postData.otherUsersMessage.map((item) => (
                <DialogMessage
                    id={item.id}
                    message={item.message}
                    timeMessage={item.timeMessage}
                    isItMyMessage={item.isItMyMessage}
                    countLikes={item.countLikes}
                />
            )
            )
            ;
        const myMessage =
            postData.myMessage.map((item) => (
                <DialogMessage
                    id={item.id}
                    message={item.message}
                    timeMessage={item.timeMessage}
                    isItMyMessage={item.isItMyMessage}
                    countLikes={item.countLikes}
                />
            ));

        const allMessage = [...otherMessage, ...myMessage].sort((a, b) => a.props.timeMessage > b.props.timeMessage ? 1 : -1);



        const addMessage = () => {
            sendMessage(postData.dialogTextArea.textMessage)
        }

        const changeDialogHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            upDateNewMessageBody(e.target.value)
        }
        return (
            <s.MainDialogs>
                <s.Сorrespondence>
                    <ul>
                        {dialogsElements}
                    </ul>
                    {allMessage}
                    <s.TypeBox>
                        <TextArea
                            value={postData.dialogTextArea.textMessage}
                            onChange={changeDialogHandler}
                            placeholder="Typing your message!"
                            autoSize={{ minRows: 2, maxRows: 4 }}
                            style={{ maxWidth: "500px", marginRight: "5px" }}
                        />
                        <Button
                            type="primary"
                            onClick={() => {
                                addMessage()
                            }}
                        >
                            Send
                        </Button>
                    </s.TypeBox>
                </s.Сorrespondence>
            </s.MainDialogs>
        )
    }
}

//postData.dialogTextArea.textMessage


//-------------------------type_dialogs----------------------------------------------


export interface DialogProps {
    dialogsData: dialogDataType[],
    postData: postDataType,
    isAuth: boolean,
    sendMessage: any,
    upDateNewMessageBody: any,
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

interface dialogTextAreaType {
    textMessage: string;
}



