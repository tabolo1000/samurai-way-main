import beach from "../assets/image/images.jpeg"
import {profileAPI} from "../api/api";


const ADD_POST: string = "ADD_POST";
const CHANGE_POST_TEXT_AREA_DATA: string = "CHANGE_POST_TEXT_AREA_DATA";
const SET_INFORMATION_USER: string = "SET_INFORMATION_USER";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

interface actionType {
    type: string;
    message?: string;
}

let initialState: any = {
    userInformation: null,
    isFetching: false,
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
        case ADD_POST: {
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
        }
              case SET_INFORMATION_USER: {
            return {
                ...state,
                // isFetching: action.isFetching,
                userInformation: action.userInformation,
            }
        }
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
        case TOGGLE_IS_FETCHING: {
            debugger
            return {
                ...state,
                isFetching: action.isFetching,
                // userInformation: action.userInformation,
            }
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
export const setUsersAC = ( userInformation: any) => (
    {
        type: SET_INFORMATION_USER,
         userInformation,
    }
)
export const toggleIsFetchingAC = ( isFetching: any) => (
    {
        type: TOGGLE_IS_FETCHING,
         isFetching,
    }
)

export const getUserThunk = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getUserProfile(userId)
            .then((response)=>{
                    dispatch(setUsersAC(response.data))
                    dispatch(toggleIsFetchingAC(true))
            })
    }
}
export default profileReducer;