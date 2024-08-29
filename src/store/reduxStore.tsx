import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import { followThunk, userReducer } from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"



const rootState = combineReducers({
    profileReducer,
    dialogReducer,
    userReducer,
    authReducer,
})




let store = createStore(rootState, applyMiddleware(thunkMiddleware));



export default store;




export type RootState = ReturnType<typeof rootState>