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
let initialState = {
    dialogsData: [
                {
                    id: 1,
                    name: "Ola",
                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: 2,
                    name: "Viktoria",
                    image: "https://plus.unsplash.com/premium_photo-1675797367645-d441fd712bf3?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: 3,
                    name: "Anna",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
            ],


    postData: {
                otherUsersMessage: [
                    {id: 1, message: "Hello!", countLikes: 1, timeMessage: 12, isItMyMessage: false,},
                    {id: 2, message: "How are you?", countLikes: 1, timeMessage: 14, isItMyMessage: false},
                    {id: 3, message: "Not bad!", countLikes: 1, timeMessage: 16, isItMyMessage: false},
                    {id: 4, message: "", countLikes: 1, timeMessage: 18, isItMyMessage: false},
                ],
                myMessage: [
                    {
                        id: 1, message: "Hi!", countLikes: 1, timeMessage: 13, isItMyMessage: true,
                    },
                    {
                        id: 2, message: "I'm fine. You?", countLikes: 2, timeMessage: 15, isItMyMessage: true,
                    },
                    {
                        id: 3, message: "What's you family?", countLikes: 2, timeMessage: 17, isItMyMessage: true,
                    },
                    {
                        id: 4, message: "Good too!", countLikes: 2, timeMessage: 19, isItMyMessage: true,
                    }
                ],
                dialogTextArea: {
                    textMessage: "text"
                }


            },
}

interface newMessageType {
    id: number,
    message: string,
    counterLike?: any,
    timeMessage: number,
    isItMyMessage: boolean,
}

const dialogReducer = (state = initialState, action: any) => {
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
            return {
                ...state,
                postData: {
                    ...state.postData,
                    myMessage: [
                        ...state.postData.myMessage,
                        newMessage
                    ],
                    dialogTextArea: {
                        ...state.postData.dialogTextArea,
                        textMessage: "",
                    },
                },
            };
        case CHANGE_DIALOGS_TEXT_AREA:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    dialogTextArea: {
                        textMessage: action.message
                    }
                }
            }
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
export let changeDialogTextAreaActionCreator = (message: string) => (
    {
        type: CHANGE_DIALOGS_TEXT_AREA,
        message: message,
    }
)

export default dialogReducer;