import {ImageAvatarStyled, ImageBackGroundStyled} from "../ProfileStyled";
import React from "react";
import {profileInfoType} from "../../../../App";



export const ProfileInfo = (props: profileInfoType) =>{
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