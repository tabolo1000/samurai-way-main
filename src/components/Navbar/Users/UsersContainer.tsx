import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../store/userReducer";
import {Users} from "./Users";

const myStateToProps = (state: any) => {
    return {
        users: state.userReducer.users,
    }
}

const myDispatchToProps = (dispatch: any) => {
    return {
        follow: (usersId: number)=>{
            dispatch(followAC(usersId))
        },
        unfollow: (usersId: number) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
    }
}
export const UsersContainer = connect(myStateToProps, myDispatchToProps)(Users);