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
            return {
                ...state,
                data: {
                    ...action.data
                }
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