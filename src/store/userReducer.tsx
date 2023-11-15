const SET_USERS = "SET_USERS",
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW";


const initialState: any = {
    users: [
         {
            id: 1,
            img: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B",
            followed: "Follow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now",
             location: {
                city: "Ternopl", country: "Ukraine",
             }
        },
         {
            id: 2,
            img: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B",
            followed: "Unfollow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now",
             location: {
                city: "Ternopl", country: "Ukraine",
             }
        },
         {
            id: 3,
            img: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B",
            followed: "Follow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now",
             location: {
                city: "Ternopl", country: "Ukraine",
             }
        },
         {
            id: 4,
            img: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B",
            followed: "Unfollow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now",
             location: {
                city: "Ternopl", country: "Ukraine",
             }
        },

    ]
}
export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case(FOLLOW): {
            return {
                ...state,
                users: state.users.map((item: any) => {
                        if(action.usersId === item.id) {
                            return ({
                                ...item,
                                followed: "Follow",
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
                                followed: "Unfollow"
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
                users: {
                    ...state.users,
                    ...action.users,
                }
            }
        }default:
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

export const setUsersAC = (users: any) => {
    return {
        type: SET_USERS,
        users,
    }
}