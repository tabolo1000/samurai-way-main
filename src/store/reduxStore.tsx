import { createStore, combineReducers, applyMiddleware } from "redux";
import { ProfileAction, profileReducer } from "./profileReducer";
import dialogReducer from "./dialogReducer";
import { UserAction, userReducer } from "./userReducer";
import authReducer, { AuthAction } from "./authReducer";
import thunkMiddleware from "redux-thunk"



const rootState = combineReducers({
    profileReducer,
    dialogReducer,
    userReducer,
    authReducer,
})





const store = createStore(rootState, applyMiddleware(thunkMiddleware));



export default store;



export type RootAction = ProfileAction | UserAction | AuthAction
export type RootState = ReturnType<typeof rootState>