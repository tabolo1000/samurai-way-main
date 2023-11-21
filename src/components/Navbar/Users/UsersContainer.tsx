import {connect} from "react-redux";
import {
    changePreloaderAC,
    followAC,
    itemsType,
    setCountUsersAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC
} from "../../../store/userReducer";
import {Users  } from "./Users";
import axios from "axios";
import React from "react";

interface propsType {
    follow: (usersId: number) => void,
    unfollow: (usersId: number) => void,
    setUsers: (users: itemsType) => void,
    users: usersType[],
    setCurrentPage: (users: itemsType, currentPage: number) => void,
    currentPage: number,
    setCountUsers: (totalCounts: number) => void,
    totalCount: number,
    isFetching: boolean,
    changePreloader: (loaderStatus: boolean) => void,
}

export interface usersType {
    followed: boolean,
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: photosType,
    status: string | null,
}

interface photosType {
    large: string | undefined,
    small: string | undefined,
}

export class UsersContainer extends React.Component<any> {
    componentDidMount() {
        this.props.changePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.setCountUsers(response.data.totalCount)
                this.props.changePreloader(false)
            })
    }

    getCurrentPage = (currentPage: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage || this.props.currentPage}`)
            .then((response: any) => {
                this.props.setCurrentPage(response.data.items, currentPage)
            })
    }
    render() {
      return <Users
          follow  = {this.props.follow}
          unfollow = {this.props.unfollow}
          users = {this.props.users}
          currentPage = {this.props.currentPage}
          getCurrentPage = {this.getCurrentPage}
          totalCount = {this.props.totalCount }
          isFetching = {this.props.isFetching}
      />
    }

}

const myStateToProps = (state: any) => {
    return {
        users: state.userReducer.users,
        currentPage: state.userReducer.currentPage || 10,
        totalCount: state.userReducer.totalCount || 1,
        isFetching: state.userReducer.isFetching
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
        },
        changePreloader: (loaderStatus: boolean) => {
            dispatch(changePreloaderAC(loaderStatus))
        }
    }
}
export default connect(myStateToProps, myDispatchToProps)(UsersContainer);