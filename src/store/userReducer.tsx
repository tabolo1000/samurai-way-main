import {usersType} from "../components/Navbar/Users/UsersContainer";


const SET_USERS = "SET_USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE",
    SET_COUNT_USERS: string = "SET_COUNT_USERS",
    CHANGE_PRELOADER_AC: string = "CHANGE_PRELOADER_AC"


const initialState: any = {
    users: [],
    currentPage: 10,
    totalCount: null,
    isFetching: false,
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
                ...state,
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
        }case (SET_COUNT_USERS): {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        }case (CHANGE_PRELOADER_AC): {
            return {
                ...state,
                isFetching: action.loaderStatus,
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

export const setCountUsersAC = (totalCount: number) => {
    return {
        type: SET_COUNT_USERS,
        totalCount,
    }
}

export const changePreloaderAC = (loaderStatus: boolean) => {
    return {
        type: CHANGE_PRELOADER_AC,
        loaderStatus,
    }
}