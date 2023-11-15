const SET_USERS = "SET_USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW";


const initialState: any = {
    users: [
    ]
}
export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case(FOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                    return (
                        (action.usersId === item.id)?
                        item.followed = "follow":
                            item
                    )
                })
            }
        }case (UNFOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                    return (
                        ( action.usersId === item.id) ?
                            item.followed = "unfollow":
                            item
                    )
                })
            }
        }case (SET_USERS): {
            return {
                ...state,
                users: {
                    ...state.users,
                    ...action.users,
                }
            }
        }
    }
}

const followAC = (type: string, usersId: number) => {
    return {
        type: FOLLOW,
        usersId,
    }
}

const unfollowAC = (type: string, usersId: number) =>{
    return {
        type: UNFOLLOW,
        usersId,
    }
}

const setUsers = (type: string, usersId: number) => {
    return {
        type: SET_USERS,
        usersId,
    }
}