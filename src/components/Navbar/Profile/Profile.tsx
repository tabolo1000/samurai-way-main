import React from 'react';
import beach from "../../../image/images.jpeg"
import {MyPosts} from "./MyPosts/MyPosts"
import {ContentStyled, ImageAvatarStyled, ImageBackGroundStyled} from "./ProfileStyled";
import {profileDataType} from "../../../App";

interface propsType {
    profileData: profileDataType;
}

interface ProfileProps {
    img: string,
    name: string,
    date: number,
    city: string,
    education: string,
    webSite: string
}
export const Profile = (props: propsType) => {
    // const createRef = React.createRef()
    return (
        <ContentStyled>
            <ProfileInfo img={beach} name = "Nik Tabola" date = {12} city = "Minsk" education = "BSU'11" webSite = "https://"/>
            <MyPosts addPost = {props.profileData.addPost} allMyPosts = {props.profileData.postsProfileData.allMyPosts}/>
        </ContentStyled>
    );
};
const ProfileInfo = (props: ProfileProps) =>{
    return(
        <div>
            <ImageBackGroundStyled/>
            <div>
                <ImageAvatarStyled src={props.img}/>
                <h2>{props.name}</h2>
                <h3>Date of Birth: {props.date}</h3>
                <h3>City: {props.city}</h3>
                <h3>Education: <span>{props.education}</span></h3>
                <h3>Web Site: <span>{props.webSite}</span></h3>
            </div>
        </div>
    )
}


