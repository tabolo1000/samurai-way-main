import {usersType} from "../components/Navbar/Users/UsersContainer";


const SET_USERS = "SET_USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE",
    SET_COUNT_USERS: string = "SET_COUNT_USERS",
    TOGGLE_IS_FETCHING: string = "TOGGLE_IS_FETCHING",
    TOGGLE_FOLLOWING_IM_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"


const initialState: any = {
    users: [],
    currentPage: 10,
    totalCount: null,
    isFetching: false,
    followingInProgress: [],
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
        }case (TOGGLE_IS_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }case (TOGGLE_FOLLOWING_IM_PROGRESS):{
            if(!state.followingInProgress.some((i: any) => i === action.userIdFollowing)){
            return {
                ...state,
                 followingInProgress: [...state.followingInProgress, action.userIdFollowing]
            }}else {
                return {
                ...state,
                 followingInProgress: [...state.followingInProgress, action.userIdFollowing = null]
            }}}
        default:
            return state;
    }
}

export const toggleFollowingInProgress = (userIdFollowing: any) => {
    return {
        type: TOGGLE_FOLLOWING_IM_PROGRESS,
        userIdFollowing,
    }
}

export const follow = ( usersId: number) => {
    return {
        type: FOLLOW,
        usersId,
    }
}

export const unfollow = (usersId: number) =>{
    return {
        type: UNFOLLOW,
        usersId,
    }
}

export const setUsers = (users: itemsType) => {
    return {
        type: SET_USERS,
        users,
    }
}

export interface itemsType {
    users: usersType[];
}

export const setCurrentPage = (users: itemsType, currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
        users,

    }
}

export const setCountUsers = (totalCount: number) => {
    return {
        type: SET_COUNT_USERS,
        totalCount,
    }
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}