import React, {useEffect} from 'react';
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
import {useParams} from "react-router-dom";




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

export let ProfileContainer = (props: any) => {

        // debugger

          let {userId}:any =  useParams();
       if(!userId){
           userId = 2
       }
  console.log(userId)
        useEffect(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
                .then((response:any) => {
                    debugger
                    props.setUsers(response.data)
                    props.toggleIsFetching(true)
                })
        }, [userId]);
        // this.props.toggleIsFetching(true)



        return (
            <ContentStyled>
                <ProfileInfo profileInfo={props.profileInfo}
                userInformation = {props.userInformation}
                isFetching = {props.isFetching}/>
                <MyPosts allMyPosts = {props.allMyPosts} postTextAreaData={props.postTextAreaData}
                         onPostChange = {props.onPostChange} addPost={props.addPost}
                         userInformation = {props.userInformation}/>
            </ContentStyled>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);



