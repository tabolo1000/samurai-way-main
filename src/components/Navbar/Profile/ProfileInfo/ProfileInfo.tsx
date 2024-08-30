import React, { Component } from "react";
import { ImageBackGroundStyled } from "../ProfileStyled";
import { Avatar } from "antd";
import { ProfileItem } from "../ProfileContainer";

export class ProfileInfo extends Component<ProfileInfoProps> {
    toggle() {
        if (this.props.fetching) {
            return (
                <div>
                    <Avatar src={this.props.userInformation.photos.large} />
                    <h2>{this.props.userInformation.fullName}</h2>
                    <h3>Date of Birth: {this.props.profileInfo.data}</h3>
                    <h3>City: {this.props.profileInfo.city}</h3>
                    <h3>Status: <span>{this.props.userInformation.aboutMe}</span></h3>
                    <h3>Web Site: <span>{this.props.userInformation.contacts.github}</span></h3>
                </div>
            );
        } else {
            return <div><h3>Loading...</h3></div>;
        }
    }

    render() {
        return (
            <>
                <div>
                    <ImageBackGroundStyled />
                    {this.toggle()}
                </div>
            </>
        );
    }
}



//----------Type of ProfileInfo-----------------------------------

type ProfileInfoProps = {
    profileInfo: ProfileItem;
    userInformation: any;
    fetching: boolean;
}

