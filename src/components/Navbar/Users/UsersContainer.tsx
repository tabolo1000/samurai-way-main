import {connect} from "react-redux";
import {
    follow, followThunk, getCurrentPageThunkCreator, getUserThunkCreator,
    itemsType,
    setCountUsers,
    setCurrentPage,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollow, unfollowThunk
} from "../../../store/userReducer";
import {Users} from "./Users";
import React from "react";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";


interface Props {
    comp: React.ElementType<any>;
}
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

    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserThunkCreator()
    }

    getCurrentPage = (nowClickCurrentPage: number) => {
        this.props.getCurrentPageThunkCreator(nowClickCurrentPage, this.props.currentPage, this.props.setCurrentPage)
        // usersAPI.getUsers(nowClickCurrentPage, this.props.currentPage)
        //      .then(response => {
        //          this.props.setCurrentPage(response.items, nowClickCurrentPage)
        //      })
    }

    render() {
        return <Users
            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            currentPage={this.props.currentPage}
            getCurrentPage={this.getCurrentPage}
            totalCount={this.props.totalCount}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
    }

}

const myStateToProps = (state: any) => {
    return {
        users: state.userReducer.users,
        currentPage: state.userReducer.currentPage || 10,
        totalCount: state.userReducer.totalCount || 1,
        isFetching: state.userReducer.isFetching,
        followingInProgress: state.userReducer.followingInProgress,
    }
}
//
export default compose<React.ComponentType>(
    connect(myStateToProps, {
    setCurrentPage,
    setCountUsers,
    unfollowThunk,
    followThunk,
    getUserThunkCreator,
    getCurrentPageThunkCreator
}),
    withAuthRedirect,
    UsersContainer
    )(Users)


// let AuthRedirectComponent = withAuthRedirect(UsersContainer)
// export default connect(myStateToProps, {
//     setCurrentPage,
//     setCountUsers,
//     unfollowThunk,
//     followThunk,
//     getUserThunkCreator,
//     getCurrentPageThunkCreator
// })(AuthRedirectComponent);


//     axios.get(`https://social-network.samuraijs.com/api/1.0/users`, {
//         withCredentials: true,
//     })
//         .then((response: any) => {
//             this.props.toggleIsFetching(false)
//             this.props.setUsers(response.data.items)
//             this.props.setCountUsers(response.data.totalCount)
//
//         })