import React from 'react';
import {ContentStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import axios from "axios";
import {
    addPostActionCreator,
    changePostTextAreaDataCreator,
    setUsersAC,
    toggleIsFetchingAC
} from "../../../store/profileReducer";
import {connect} from "react-redux";
// import {useNavigate} from "react-router";
import {withRouter} from "../../withRouter";




interface propsType {
    profileInfo: profileInfoType,
    allMyPosts: allMyPostsType[],
    postTextAreaData: postTextAreaDataType,
    onPostChange: (message: string) => void,
    addPost: (message: string) => void,
    setUsers: (users: any) => void,
}

export interface profileInfoType {
    img: string,
    name: string,
    data: string,
    city: string,
    education: string,
    webSite: string,
}

interface allMyPostsType {
    id: number,
    image: string,
    message: string,
}

interface postTextAreaDataType {
    letter: string,
}


export class ProfileContainer extends React.Component<any> {
    componentDidMount(){
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response:any) => {
                debugger
                this.props.setUsers(response.data)
                this.props.toggleIsFetching(true)
            })
    }
    render() {

        return (
            <ContentStyled>
                <ProfileInfo profileInfo={this.props.profileInfo}
                userInformation = {this.props.userInformation}
                isFetching = {this.props.isFetching}/>
                <MyPosts allMyPosts = {this.props.allMyPosts} postTextAreaData={this.props.postTextAreaData}
                         onPostChange = {this.props.onPostChange} addPost={this.props.addPost}
                         userInformation = {this.props.userInformation}/>
            </ContentStyled>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        userInformation: state.profileReducer.userInformation,
        profileInfo: state.profileReducer.postsProfileData.profileInfo,
        allMyPosts: state.profileReducer.postsProfileData.allMyPosts,
        postTextAreaData: state.profileReducer.postsProfileData.postTextAreaData,
        isFetching: state.profileReducer.isFetching,

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange: (message: string) => {
            dispatch(changePostTextAreaDataCreator(message))
        },
        addPost: (message:string) => {
            dispatch(addPostActionCreator(message))
        },
        setUsers: (userInformation: any) => {
             dispatch(setUsersAC(userInformation))
        },
        toggleIsFetching: (isFetching: any) => {
            dispatch(toggleIsFetchingAC(isFetching))
    }
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);



