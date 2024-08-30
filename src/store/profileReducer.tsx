import beach from "../assets/image/images.jpeg"
import { profileAPI } from "../api/api";
import { Dispatch } from "react";
import { RootAction } from "./reduxStore";



enum ACT {
    ADD_POST = "ADD_POST",
    CHANGE_POST_TEXT_AREA_DATA = "CHANGE_POST_TEXT_AREA_DATA",
    SET_INFORMATION_USER = "SET_INFORMATION_USER",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
}


let initialState: any = {
    userInformation: null,
    fetching: true,
    postsProfileData: {
        profileInfo: {
            img: beach,
            name: "Nik Tabala",
            date: "12.12.12",
            city: "Minsk",
            education: "BSU'11",
            webSite: "https://"
        },
        userInformation: {
            photos: {
                large: null,
                small: null,
            },
            fullName: "",
            aboutMe: "",
            github: "",
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


export const profileReducer = (state = initialState, action: ProfileAction) => {
    switch (action.type) {
        case ACT.ADD_POST: {
            let post = {
                id: state.postsProfileData.allMyPosts.length,
                message: action.message,
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
        }
        case ACT.SET_INFORMATION_USER: {
            return {
                ...state,
                userInformation: action.userInformation,
            }
        }
        case ACT.CHANGE_POST_TEXT_AREA_DATA: {
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
        case ACT.TOGGLE_IS_FETCHING: {
            return {
                ...state,
                fetching: action.fetching,
            }
        }

        default:
            return state;
    }
};

//-----------Action_Creater---------------------------------------

export const addPostAction = (message: string) => (
    {
        type: ACT.ADD_POST,
        message: message,
    } as const
);
export const changeTypingPostAction = (message: string) => (
    {
        type: ACT.CHANGE_POST_TEXT_AREA_DATA,
        message: message,
    } as const
)
export const setUsersAction = (userInformation: any) => (
    {
        type: ACT.SET_INFORMATION_USER,
        userInformation,
    } as const
)
export const toggleIsFetchingAction = (fetching: boolean) => (
    {
        type: ACT.TOGGLE_IS_FETCHING,
        fetching,
    } as const
)


//------------Thunk_Creater----------------------------------------

export const getUserThunk = (userId: number) => {
    return (dispatch: Dispatch<RootAction>) => {
        dispatch(toggleIsFetchingAction(true))
        profileAPI.getUserProfile(userId)
            .then((response) => {
                debugger
                dispatch(setUsersAction(response.data))
                dispatch(toggleIsFetchingAction(true))
                dispatch(toggleIsFetchingAction(false))
            })
            .finally(() => {

            })
    }
}



//--------Profile_Reducer_Type------------------------------------

export type ProfileAction = AddPostActionCreator | ChangePostTextAreaDataCreator
    | SetUsersAC | ToggleIsFetchingAC

export type GetUserThunk = ReturnType<typeof getUserThunk>
type AddPostActionCreator = ReturnType<typeof addPostAction>
type ChangePostTextAreaDataCreator = ReturnType<typeof changeTypingPostAction>
type SetUsersAC = ReturnType<typeof setUsersAction>
type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetchingAction>



export type UserInformation = {
    aboutMe: string;
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    }
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    photos: {
        small: string,
        large: string,
    }
    userId: number,
}