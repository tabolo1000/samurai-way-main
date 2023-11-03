import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts"
import {ContentStyled, ImageAvatarStyled, ImageBackGroundStyled} from "./ProfileStyled";
import { profileDataType} from "../../../App";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

interface propsType {
    profileData: profileDataType;
    dispatch: (action:any) => void;
}



export const Profile = (props: propsType) => {
    let propsProfileInfo = props.profileData.postsProfileData.profileInfo;
    return (
        <ContentStyled>
            <ProfileInfo img={propsProfileInfo.img} name = "Nik Tabola" date = {propsProfileInfo.date} city = {propsProfileInfo.city} education = {propsProfileInfo.education} webSite = {propsProfileInfo.webSite}/>
            <MyPosts
                dispatch = {props.dispatch}
                allMyPosts = {props.profileData.postsProfileData.allMyPosts}
                letter = {props.profileData.postsProfileData.postTextAreaData.letter}
            />
        </ContentStyled>
    );
};



