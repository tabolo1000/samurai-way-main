import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, changePostTextAreaDataCreator} from "../../../../store/profileReducer";
import {stateType} from "../../../../App";
import {StoreContext} from "../../../../store/reactContext";

interface propsType {
    store: stateType;
    state: any;
}

export const MyPostsContainer = (props: propsType) => {
    return (
        <StoreContext.Consumer>
            {
                (store:any) => {
                    if(store !== null){
                        let state = store.getState().profileReducer;
                        const onPostChange = (message: string) => {
                           store.dispatch(changePostTextAreaDataCreator(message))
                        }
                        const addPost = (message: string) => {
                            store.dispatch(addPostActionCreator(message))
                        }
                        return (
                            <MyPosts state={state} onPostChange={onPostChange} addPost={addPost}/>
                        )

                    }
                }
            }</StoreContext.Consumer>
    );
};

