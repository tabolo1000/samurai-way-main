import React, {useEffect} from 'react';
import {ContentStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import axios from "axios";
import {
    addPostActionCreator,
    changePostTextAreaDataCreator, getUserThunk,
    setUsersAC,
    toggleIsFetchingAC
} from "../../../store/profileReducer";
import {connect} from "react-redux";
// import {useNavigate} from "react-router";
import {withRouter} from "../../withRouter";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";
import {ProfileStatus} from "./ProfileStatus";


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
debugger
    // debugger

    // let {userId}: any = useParams();
    // if (!userId) {
    //     userId = 2
    // }
    props.getUserInfo(2)

    // useEffect(() => {
    //     props.getUserInfo(userId)
    //      },[userId])

    //
    // props.getUserInfo(2)
    // useEffect(() => {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    //         .then((response: any) => {
    //             props.setUsers(response.data)
    //             props.toggleIsFetching(true)
    //         })
    // }, [userId]);
    // // this.props.toggleIsFetching(true)


    return (
        <ContentStyled>
            <ProfileInfo profileInfo={props.profileInfo}
                         userInformation={props.userInformation}
                         isFetching={props.isFetching}/>
            <ProfileStatus/>
            <MyPosts allMyPosts={props.allMyPosts} postTextAreaData={props.postTextAreaData}
                     onPostChange={props.onPostChange} addPost={props.addPost}
                     userInformation={props.userInformation}/>
        </ContentStyled>
    );
}



const mapStateToProps = (...arg: any) => {
    return {
        userInformation: arg[0].profileReducer.userInformation,
        profileInfo: arg[0].profileReducer.postsProfileData.profileInfo,
        allMyPosts: arg[0].profileReducer.postsProfileData.allMyPosts,
        postTextAreaData: arg[0].profileReducer.postsProfileData.postTextAreaData,
        isFetching: arg[0].profileReducer.isFetching,

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserInfo: (userId: number ) => {
            dispatch(getUserThunk(userId))
        },
        onPostChange: (message: string) => {
            dispatch(changePostTextAreaDataCreator(message))
        },
        addPost: (message: string) => {
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
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(ProfileContainer)
// export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);



