import {ImageAvatarStyled, ImageBackGroundStyled} from "../ProfileStyled";
import React from "react";
import {profileInfoType} from "../Profile";




export const ProfileInfo = (props: any) => {
    return(
        <div>
            <ImageBackGroundStyled/>
            <div>
                <ImageAvatarStyled src={props.profileInfo.img}/>
                <h2>{props.profileInfo.name}</h2>
                <h3>Date of Birth: {props.profileInfo.date}</h3>
                <h3>City: {props.profileInfo.city}</h3>
                <h3>Education: <span>{props.profileInfo.education}</span></h3>
                <h3>Web Site: <span>{props.profileInfo.webSite}</span></h3>
            </div>
        </div>
    )
}