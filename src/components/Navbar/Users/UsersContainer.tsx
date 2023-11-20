import {connect} from "react-redux";
import {
    followAC,
    itemsType,
    setCountUsersAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC
} from "../../../store/userReducer";
import {Users, usersType} from "./Users";




const myStateToProps = (state: any) => {
    return {
        users: state.userReducer.users,
        currentPage: state.userReducer.currentPage || 10,
        totalCount: state.userReducer.totalCount || 1,
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
        setCurrentPage: (users: itemsType, currentPage: number) => {
            dispatch(setCurrentPageAC(users, currentPage));
        },
        setCountUsers: (totalCount: number) => {
            dispatch(setCountUsersAC(totalCount))
        }
    }
}
export const UsersContainer = connect(myStateToProps, myDispatchToProps)(Users);