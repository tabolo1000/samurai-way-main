import { createStore, combineReducers, applyMiddleware } from "redux";
import { ProfileAction, profileReducer, StateProfile } from "./profileReducer";
import dialogReducer, { DialogAction, StateDialog } from "./dialogReducer";
import { StateUser, UserAction, userReducer } from "./userReducer";
import authReducer, { AuthAction, StateAuth } from "./authReducer";
import thunkMiddleware from "redux-thunk"



const rootState = combineReducers<RootStateMy>({
    profileReducer,
    dialogReducer,
    userReducer,
    authReducer,
})





const store = createStore(rootState, applyMiddleware(thunkMiddleware));



export default store;

type RootStateMy = {
    profileReducer: StateProfile
    dialogReducer: StateDialog
    userReducer: StateUser
    authReducer: StateAuth
}


export type RootAction = ProfileAction | UserAction | AuthAction | DialogAction
export type RootState = ReturnType<typeof rootState>


