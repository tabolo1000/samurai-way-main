import React from 'react';
import {Dialogs, dialogType} from "./Dialogs";
import { stateType} from "../../../App";
import {addMessageActionCreator, changeDialogTextAreaActionCreator} from "../../../store/dialogReducer";

interface propsType {
    store: stateType,
    state: any;
}


export const DialogContainer = (props: propsType) => {
    let contextStore = props.store.dispatch.bind(props.store)
    const state = props.state.dialogReducer;
const sendMessage = (message: string) => {
    contextStore(addMessageActionCreator(message))
}
const upDateNewMessageBody = (message: string) => {
    contextStore(changeDialogTextAreaActionCreator(message))
    }
    return (
        <div>
            <Dialogs state = {state} sendMessage = {sendMessage} upDateNewMessageBody = {
                upDateNewMessageBody
            }/>
        </div>
    );
};

