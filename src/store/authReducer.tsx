
enum ACT {
    SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA',
}

export type StateAuth = {
    isAuth: boolean,
    data: Data
}


const initialState: StateAuth = {
    isAuth: false,
    data: {
        id: null,
        email: null,
        login: null,
    }
}

const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case ACT.SET_AUTH_USER_DATA: {
            return {
                ...state,
                data: {
                    ...action.data
                },
                isAuth: Boolean(action.data.id),
            }
        }
        default: return state;

    }
}


export const setAuthUserData = (data: Data) => {
    return {
        type: ACT.SET_AUTH_USER_DATA,
        data,
    } as const
}


export default authReducer;




//--------------Type_of_auth_reducer-------------------------------------

export type AuthAction = SetAuthUserData

type SetAuthUserData = ReturnType<typeof setAuthUserData>

export type Data = {
    id: number | null
    email: string | null
    login: string | null
}