const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


const initialState = {
    isAuth: false,
    data: {
        id: null,
        email: null,
        login: null,
    }
}

const authReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA: {
            debugger
            return {
                ...state,
                data: {
                    ...action.data
                },
                isAuth: Boolean(action.data.id),
            }
        }
        default:{
            return state;
        }
    }
}


export const setAuthUserData = (data: any) => {
    return {
        type: SET_AUTH_USER_DATA,
        data,
    }
}


export default authReducer;