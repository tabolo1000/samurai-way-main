import React from 'react';
import beach from "../../../image/images.jpeg"
import {MyPosts} from "./MyPosts/MyPosts"
import {ContentStyled, ImageAvatarStyled, ImageBackGroundStyled} from "./ProfileStyled";
import {profileDataType} from "../../../App";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

interface propsType {
    profileData: profileDataType;
}

export const Profile = (props: propsType) => {
    // const createRef = React.createRef()
    let propsProfileInfo = props.profileData.postsProfileData.profileInfo;
    return (
        <ContentStyled>
            <ProfileInfo img={propsProfileInfo.img} name = "Nik Tabola" date = {propsProfileInfo.date} city = {propsProfileInfo.city} education = {propsProfileInfo.education} webSite = {propsProfileInfo.webSite}/>
            <MyPosts addPost = {props.profileData.addPost} allMyPosts = {props.profileData.postsProfileData.allMyPosts}/>
        </ContentStyled>
    );
};



