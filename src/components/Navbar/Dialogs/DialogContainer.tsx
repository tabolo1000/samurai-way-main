import React from 'react';
import {Dialogs, dialogType} from "./Dialogs";
import {stateType} from "../../../App";
import {addMessageActionCreator, changeDialogTextAreaActionCreator} from "../../../store/dialogReducer";
import {StoreContext} from "../../../store/reactContext";



export const DialogContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: any) => {
                    if (store !== null) {
                        let contextStore = store.dispatch.bind(store)
                        const state = store.getState().dialogReducer;
                        const sendMessage = (message: string) => {
                            contextStore(addMessageActionCreator(message))
                        }
                        const upDateNewMessageBody = (message: string) => {
                            contextStore(changeDialogTextAreaActionCreator(message))
                        }
                        return (
                            <Dialogs state={state} sendMessage={sendMessage} upDateNewMessageBody={
                                upDateNewMessageBody
                            }/>

                        )

                    }
                }
            }
        </StoreContext.Consumer>
    );
};

