import React from 'react';
import {PostProfileDataType, profileDataType} from "../App";
import beach from "../image/images.jpeg"

const ADD_POST: string = "ADD_POST";
const CHANGE_POST_TEXT_AREA_DATA: string = "CHANGE_POST_TEXT_AREA_DATA";

interface actionType {
    type: string;
    message?: string;
}

let initialState = {
  postsProfileData: {
                profileInfo: {
                    img: beach,
                    name: "Nik Tabala",
                    date: "12.12.12",
                    city: "Minsk",
                    education: "BSU'11",
                    webSite: "https://"
                },
                allMyPosts: [
                    {
                        id: 1,
                        image: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
                        message: "What's you know about it"
                    }
                ],
                postTextAreaData: {
                    letter: "ss",
                }
            },
}


const profileReducer = (state= initialState, action: any) => {
    switch (action.type) {

        case ADD_POST:

            let lengthThisArr: number = state.postsProfileData.allMyPosts.length;
            let post = {
                id: lengthThisArr, message: action.message,
                image: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
            }

            return {
                ...state,
                postsProfileData: {
                    ...state.postsProfileData,
                    allMyPosts: [
                        ...state.postsProfileData.allMyPosts,
                        post,
                    ],
                    postTextAreaData: {
                        letter: "",
                    }
                }
            };
        case CHANGE_POST_TEXT_AREA_DATA:{
            return {
                ...state,
                postsProfileData: {
                    ...state.postsProfileData,
                    postTextAreaData: {
                        letter: action.message,
                    },
                },
            };
    }
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