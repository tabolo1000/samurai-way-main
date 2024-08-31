import { connect } from "react-redux";
import {
    followThunk,
    getUsersPageThunk,
    getUserThunk,
    itemsType,
    ItemUser,
    setCountUsers,
    setCurrentPage,
    unfollowThunk,
} from "../../../store/userReducer";
import { Users } from "./Users";
import React, { ComponentType, Dispatch } from "react";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";
import { RootState } from "../../../store/reduxStore";




export class UsersContainer extends React.Component<UsersContainerProps> {
    constructor(props: UsersContainerProps) {
        super(props);
    }
    componentDidMount() {
        this.props.getUserThunk()
    }

    render() {
        return <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            fetching={this.props.fetching}
            followingInProgress={this.props.followingInProgress}

            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
            getUsersPageThunk={this.props.getUsersPageThunk}
        />
    }

}


//-------------------Type_of_User_Container------------------------------------

interface UsersContainerProps {
    users: ItemUser[],
    currentPage: number,
    totalCount: number,
    fetching: boolean,
    followingInProgress: [],

    followThunk: () => (id: number) => void,
    unfollowThunk: () => (id: number) => void,
    setCurrentPage: (users: itemsType, currentPage: number) => void,
    setCountUsers: (totalCounts: number) => void,
    getUserThunk: () => void;
    getUsersPageThunk: (page: number,) => void;
}


//-------------------Container_Connect_Users--------------------------

const mapStateToProps = (state: RootState) => {
    return {
        users: state.userReducer.users,
        currentPage: state.userReducer.currentPage || 10,
        totalCount: state.userReducer.totalCount || 1,
        fetching: state.userReducer.fetching,
        followingInProgress: state.userReducer.followingInProgress,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        followThunk,
        unfollowThunk,
        setCurrentPage,
        setCountUsers,

        getUserThunk,
        getUsersPageThunk,
    }),
    withAuthRedirect
)(UsersContainer)


