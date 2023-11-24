import {ImageAvatarStyled, ImageBackGroundStyled} from "../ProfileStyled";
import React from "react";
import {profileInfoType} from "../ProfileContainer";


export const ProfileInfo = (props: any) => {
    debugger
    const toggle = () => {
        if (props.isFetching) {
            return (
                <div>
                    <ImageAvatarStyled src={props.userInformation.photos.large}/>
                    <h2>{props.userInformation.fullName}</h2>
                    <h3>Date of Birth: {props.profileInfo.date}</h3>
                    <h3>City: {props.profileInfo.city}</h3>
                    <h3>Status: <span>{props.userInformation.aboutMe

                    }</span></h3>
                    <h3>Web Site: <span>{props.userInformation.contacts.github}</span></h3>
                </div>
            )
        } else if (!props.isFetching) {
            return (
                <div><h3>Loading...</h3></div>
            )
        }
    }
    return <>
        <div>
            <ImageBackGroundStyled/>
            {toggle()}
        </div>
    </>

}