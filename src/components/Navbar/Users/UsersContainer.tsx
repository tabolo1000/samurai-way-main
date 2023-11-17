import {connect} from "react-redux";
import {followAC, itemsType, setUsersAC, unfollowAC} from "../../../store/userReducer";
import {Users, usersType} from "./Users";




const myStateToProps = (state: any) => {
    return {
        users: state.userReducer.users,
    }
}

const myDispatchToProps = (dispatch: any) => {
    return {
        follow: (usersId: number)=>{
            dispatch(followAC(usersId));
        },
        unfollow: (usersId: number) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users: itemsType) => {
            dispatch(setUsersAC(users))
        },
    }
}
export const UsersContainer = connect(myStateToProps, myDispatchToProps)(Users);