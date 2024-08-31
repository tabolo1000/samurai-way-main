import { usersAPI } from "../api/api";
import { Dispatch } from "react";



enum ACT {
    SET_USERS = "SET_USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_COUNT_USERS = "SET_COUNT_USERS",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_FOLLOWING_IM_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"
}

const initialState: StateUser = {
    users: [
        {
            followed: true,
            id: 1,
            name: "string",
            photos: {
                small: "string",
                large: "string",
            },
            status: "string",
            uniqueUrlName: "string",
        }
    ],
    currentPage: 1,
    totalCount: null,
    fetching: false,
    followingInProgress: [],
};

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case (ACT.FOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                    if (action.usersId === item.id) {
                        return ({
                            ...item,
                            followed: true,
                        })
                    } else {
                        return ({
                            ...item
                        })
                    }
                })
            }
        } case (ACT.UNFOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                    if (action.usersId === item.id) {
                        return ({
                            ...item,
                            followed: false
                        }
                        )
                    } else {
                        return ({
                            ...item,
                        })
                    }
                })
            }
        } case (ACT.SET_USERS): {
            return {
                ...state,
                users: [
                    ...action.users,
                ]
            }
        } case (ACT.SET_CURRENT_PAGE): {
            debugger
            return {
                ...state,
                users: [...action.users],
                currentPage: action.currentPage,
            }
        } case (ACT.SET_COUNT_USERS): {
            return {
                ...state,
                totalCount: action.totalCount,
            }
        } case (ACT.TOGGLE_IS_FETCHING): {
            return {
                ...state,
                fetching: action.fetching,
            }
        } case (ACT.TOGGLE_FOLLOWING_IM_PROGRESS): {
            return {
                ...state,
                followingInProgress: action.fetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter((id: any) => id != action.id)
            }
        }

        default:
            return state;
    }
}

export type UserAction = Loading | Follow | Unfollow | SetUsers | SetCurrentPage | SetCountUsers | ToggleIsFetching

type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
type SetCountUsers = ReturnType<typeof setCountUsers>
type SetCurrentPage = ReturnType<typeof setCurrentPage>
type SetUsers = ReturnType<typeof setUsers>
type Unfollow = ReturnType<typeof unfollow>
type Follow = ReturnType<typeof follow>
type Loading = ReturnType<typeof loading>

export interface itemsType {
    users: ItemUser[];
}



//-------------Action_Creater----------------------------------------

export const loading = (fetching: boolean, id: number) => {
    return {
        type: ACT.TOGGLE_FOLLOWING_IM_PROGRESS,
        fetching,
        id,
    } as const
}
export const follow = (usersId: number) => {
    return {
        type: ACT.FOLLOW,
        usersId,
    } as const
}
export const unfollow = (usersId: number) => {
    return {
        type: ACT.UNFOLLOW,
        usersId,
    } as const
}
export const setUsers = (users: ItemUser[]) => {
    return {
        type: ACT.SET_USERS,
        users,
    } as const
}
export const setCurrentPage = (users: ItemUser[], currentPage: number) => {
    return {
        type: ACT.SET_CURRENT_PAGE,
        currentPage,
        users,

    } as const
}
export const setCountUsers = (totalCount: number) => {
    return {
        type: ACT.SET_COUNT_USERS,
        totalCount,
    } as const
}
export const toggleIsFetching = (fetching: boolean) => {
    return {
        type: ACT.TOGGLE_IS_FETCHING,
        fetching,
    } as const
}





//-------------------------Thunk_Creater_User-------------------------

export const getUserThunk = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.setUsers()
            .then(res => {
                dispatch(setUsers(res.items))
                dispatch(setCountUsers(res.totalCount))
            })
            .finally(() => {
                dispatch(toggleIsFetching(false))
            })
    }
}

export const getUsersPageThunk = (page: number) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(page)
            .then(res => {
                dispatch(setCurrentPage(res.items, page))
            })
            .finally(() => {
                dispatch(toggleIsFetching(false))
            })
    }
}

export const unfollowThunk = (id: number) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch(loading(true, id))
        usersAPI.deleteUserUnfollow(id)
            .then((res) => {
                if (res.resultCode === 0) {
                    dispatch(unfollow(id))
                }
            })
            .finally(() => {
                dispatch(loading(false, id))
            })
    }
}
export const followThunk = (id: number) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch(loading(true, id))
        usersAPI.setUserFollowing(id)
            .then((res) => {
                if (res.resultCode === 0) {
                    dispatch(follow(id))
                }
            })
            .finally(() => {
                dispatch(loading(false, id))
            })
    }
}

export type ItemUser = {
    followed: boolean,
    id: number,
    name: string,
    photos: {
        small: string | null,
        large: string | null,
    }
    status: null | string,
    uniqueUrlName: null | string,
}

export type StateUser = {
    users: ItemUser[];
    currentPage: number;
    totalCount: number | null;
    fetching: boolean;
    followingInProgress: number[];
}



