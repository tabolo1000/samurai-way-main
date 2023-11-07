import React from 'react';
import {ContentStyled} from "./ProfileStyled";
import {allMyPropsType, stateType, profileInfoType, dialogType, profileDataType} from "../../../App";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import dialogReducer from "../../../store/dialogReducer";





export const Profile = (props: any) => {
    debugger
    const profileInfo = props.store.getState().profileReducer.postsProfileData.profileInfo
    return (
        <ContentStyled>
            <ProfileInfo img={profileInfo.img} name = "Nik Tabola" date = {profileInfo.date} city = {profileInfo.city} education = {profileInfo.education} webSite = {profileInfo.webSite}/>
            <MyPostsContainer store = {props.store} state = {props.store.getState()}/>
        </ContentStyled>
    );
};



