import React from 'react';
import {PostProfileDataType, profileDataType} from "../App";

const ADD_POST: string = "ADD_POST";
const CHANGE_POST_TEXT_AREA_DATA: string = "CHANGE_POST_TEXT_AREA_DATA";

interface actionType {
    type: string;
    message?: string;
}


const profileReducer = (state: profileDataType, action: any) => {
    switch (action.type) {
        case ADD_POST:
            debugger
            let lengthThisArr: number = state.postsProfileData.allMyPosts.length;
            let post = {
                id: lengthThisArr, message: action.message,
                image: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
            }
            state.postsProfileData.allMyPosts.push(post);
            state.postsProfileData.postTextAreaData.letter = "";

            return state;
        case CHANGE_POST_TEXT_AREA_DATA:
            state.postsProfileData.postTextAreaData.letter = action.letter;
            console.log(state)
            return state;
        default:
            return state;
    }
};


export let addPostActionCreator = (message: string) => ({
    type: ADD_POST,
    message: message,
});
export let changePostTextAreaDataCreator = (message: string) => (
    {
        type: CHANGE_POST_TEXT_AREA_DATA,
        message: message,
    })
export default profileReducer;