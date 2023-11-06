import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, changePostTextAreaDataCreator} from "../../../../store/profileReducer";
import {stateType} from "../../../../App";

interface propsType{
    store: stateType;
    state: any;
}

export const MyPostsContainer = (props: propsType) => {
    let state = props.state.profileReducer;
    const onPostChange = (message: string) => {
        props.store.dispatch(changePostTextAreaDataCreator(message))
    }
    const addPost = (message: string) => {
        props.store.dispatch(addPostActionCreator(message))
    }
    return (
        <div>
            <MyPosts state = {state} onPostChange = {onPostChange} addPost = {addPost}/>
        </div>
    );
};

