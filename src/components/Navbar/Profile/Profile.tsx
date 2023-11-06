import React from 'react';
import {ContentStyled} from "./ProfileStyled";
import {profileDataType, stateType} from "../../../App";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

interface propsType {
    store: stateType;
    state: stateWithReducerType;
}

interface stateWithReducerType {
    profileReducer: profileDataType
}



export const Profile = (props: propsType) => {
    const profileInfo = props.state.profileReducer.postsProfileData.profileInfo
    return (
        <ContentStyled>
            <ProfileInfo img={profileInfo.img} name = "Nik Tabola" date = {profileInfo.date} city = {profileInfo.city} education = {profileInfo.education} webSite = {profileInfo.webSite}/>
            <MyPostsContainer store = {props.store} state = {props.state}/>
        </ContentStyled>
    );
};



