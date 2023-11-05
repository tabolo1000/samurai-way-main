import React from 'react';
import {dialogType} from "../App";

const ADD_MESSAGE: string = "ADD_MESSAGE";
const CHANGE_DIALOGS_TEXT_AREA: string = "CHANGE_DIALOGS_TEXT_AREA";

type actionType = {
    type: string,
    message?: string,
    like?: number,
    timeMessage?: number,
    isItMyMessage?: boolean,
}
const dialogReducer = (state: dialogType, action: actionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let idForMessage = state.postData.myMessage.length
            let newMessage: any = {
                id: idForMessage,
                message: action.message,
                counterLike: action.like,
                timeMessage: action.timeMessage,
                isItMyMessage: action.isItMyMessage,
            }
            state.postData.myMessage.push(newMessage);
            return state
        case CHANGE_DIALOGS_TEXT_AREA:
            debugger
            state.postData.dialogTextArea.textMessage = action.message;
            return state
        default:
            return state;

    }
};

export let addMessageActionCreator = (message: string) => (
    {
        type: ADD_MESSAGE,
        message: message,
        like: 5,
        timeMessage: 20,
        isItMyMessage: true,
    }
)
export let changeDialogTextAreaCreator = (message: string) => (
    {
        type: CHANGE_DIALOGS_TEXT_AREA,
        message: message,
    }
)

export default dialogReducer;