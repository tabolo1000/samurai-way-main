import React, { Component } from "react";
import { ImageBackGroundStyled } from "../ProfileStyled";
import { Avatar, Col } from "antd";
import { ProfileItem } from "../ProfileContainer";
import styled from "styled-components";

export class ProfileInfo extends Component<ProfileInfoProps> {

    toggle() {
        if (!this.props.fetching) {
            debugger
            return (
                <>
                    <Col
                        className="gutter-row"
                        span={8}
                    >
                        <AvatarСustom
                            shape="square"
                            src={this.props.userInformation.photos.large}
                        />
                    </Col>
                    <Col
                        className="gutter-row" span={8}>
                        <div>
                            <h2>{this.props.userInformation.fullName}</h2>
                            <h3>Date of Birth: {this.props.profileInfo.data}</h3>
                            <h3>City: {this.props.profileInfo.city}</h3>
                            <h3>Status: <span>{this.props.userInformation.aboutMe}</span></h3>
                            <h3>Web Site: <span>{this.props.userInformation.contacts.github}</span></h3>
                        </div>
                    </Col>
                </>
            );
        } else {
            return <div>
                <h3>Loading...</h3>
            </div>;
        }
    }

    render() {
        return (
            <>
                <Col className="gutter-row" span={24}>
                    <ImageBackGroundStyled />
                </Col>

                {this.toggle()}
            </>
        );
    }
}

//----------------------Styled_Profile_info--------------------------

const AvatarСustom = styled(Avatar)`
    width: 380px;
    height: 500px;
    border-radius: 20px !important;
    object-fit: cover;
    object-position: center;
    margin: 5px 0;
`

//----------Type of ProfileInfo-----------------------------------

type ProfileInfoProps = {
    profileInfo: ProfileItem;
    userInformation: any;
    fetching: boolean;
}

