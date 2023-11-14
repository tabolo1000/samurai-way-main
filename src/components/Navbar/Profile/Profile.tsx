import React from 'react';
import {ContentStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";



interface propsType {
    profileInfo: profileInfoType,
    allMyPosts: allMyPostsType[],
    postTextAreaData: postTextAreaDataType,
    onPostChange: (message: string) => void,
    addPost: (message: string) => void,
}

export interface profileInfoType {
    img: string,
    name: string,
    data: string,
    city: string,
    education: string,
    webSite: string,
};

interface allMyPostsType {
    id: number,
    image: string,
    message: string,
}
interface postTextAreaDataType {
    letter: string,
}


export const Profile = (props: propsType) => {
    debugger
    return (
        <ContentStyled>
            <ProfileInfo profileInfo = {props.profileInfo}/>
            <MyPosts allMyPosts = {props.allMyPosts} postTextAreaData = {props.postTextAreaData} onPostChange = {props.onPostChange} addPost = {props.addPost}/>
        </ContentStyled>
    );
};



