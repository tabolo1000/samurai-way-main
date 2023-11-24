import {connect} from "react-redux";
import {
    follow,
    itemsType,
    setCountUsers,
    setCurrentPage,
    setUsers, toggleIsFetching,
    unfollow
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
    toggleIsFetching: (loaderStatus: boolean) => void,
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

        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setCountUsers(response.data.totalCount)

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


export default connect(myStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setCountUsers,
        toggleIsFetching,
})(UsersContainer);