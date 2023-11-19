import {usersType} from "../components/Navbar/Users/Users";

const SET_USERS = "SET_USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE";


const initialState: any = {
    users: [
    ],
    currentPage: 1,
};

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case(FOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                        if(action.usersId === item.id) {
                            return ({
                                ...item,
                                followed: true,
                            })
                        }else {
                            return ({
                                ...item
                            })
                        }


                })
            }
        }case (UNFOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                    if(action.usersId === item.id) {
                        return ({
                                ...item,
                                followed: false
                            }
                        )
                    }else{
                        return ({
                            ...item,
                        })
                    }
                })
            }
        }case (SET_USERS): {
            return {
                users: [
                    ...action.users,
                ]
            }
        }case (SET_CURRENT_PAGE): {
            return {
                ...state,
                users: [...action.users],
                currentPage: action.currentPage,
            }
        }
        default:
            return state;
    }
}

export const followAC = ( usersId: number) => {
    return {
        type: FOLLOW,
        usersId,
    }
}

export const unfollowAC = (usersId: number) =>{
    return {
        type: UNFOLLOW,
        usersId,
    }
}

export const setUsersAC = (users: itemsType) => {
    return {
        type: SET_USERS,
        users,
    }
}

export interface itemsType {
    users: usersType[];
}

export const setCurrentPageAC = (users: itemsType, currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
        users,

    }
}