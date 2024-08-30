import React, { Component, ReactNode } from 'react';
import { MyPosts } from "./MyPosts/MyPosts";
import {
    addPostAction,
    changeTypingPostAction,
    getUserThunk,
    setUsersAction,
    toggleIsFetchingAction,
    UserInformation,
} from "../../../store/profileReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/AuthRedirect";
import { RootState } from '../../../store/reduxStore';
import { s } from "./ProfileStyled"
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { Col, Row } from 'antd';




export class ProfileContainer extends Component<ProfileContainerProps> {
    componentDidMount(): void {
        this.props.getUserThunk(2)
    }

    render(): ReactNode {
        const {
            fetching,
            userInformation,
            profileInfo,
            allMyPosts,
            postTextAreaData,
            changeTypingPostAction,
            addPostAction,
        } = this.props
        debugger
        return (
            <s.MainProfile>
                <Row
                    gutter={20}
                    justify={"start"}
                    align={"middle"}
                >
                    <ProfileInfo
                        profileInfo={profileInfo}
                        userInformation={userInformation}
                        fetching={fetching}
                    />
                </Row>
                <Row
                    gutter={20}
                >
                    <Col className="gutter-row" span={24}>
                        <MyPosts
                            allMyPosts={allMyPosts}
                            postTextAreaData={postTextAreaData}
                            onPostChange={changeTypingPostAction}
                            addPost={addPostAction}
                        />
                    </Col>
                </Row>
            </s.MainProfile>
        )
    }
}


//-----------------------Connect_HOC-------------------------------

const mapStateToProps = (state: RootState) => {
    return {
        userInformation: state.profileReducer.userInformation,
        profileInfo: state.profileReducer.postsProfileData.profileInfo,
        allMyPosts: state.profileReducer.postsProfileData.allMyPosts,
        postTextAreaData: state.profileReducer.postsProfileData.postTextAreaData,
        fetching: state.profileReducer.fetching,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserThunk,
        changeTypingPostAction,
        addPostAction,
        setUsersAction,
        toggleIsFetchingAction
    }),
    withAuthRedirect
)(ProfileContainer)


//----------------Type_Profile-------------------------------------

type ProfileContainerProps = {
    fetching: boolean
    userInformation: UserInformation
    profileInfo: ProfileItem,
    allMyPosts: AllMyPostsType[],
    postTextAreaData: PostTextAreaDataType,
    changeTypingPostAction: (message: string) => void,
    addPostAction: (message: string) => void,
    setUsersAction: (users: any) => void,
    getUserThunk: (id: number) => void,
}

export interface ProfileItem {
    img: string,
    name: string,
    data: string,
    city: string,
    education: string,
    webSite: string,
}

export interface AllMyPostsType {
    id: number,
    image: string,
    message: string,
}

export interface PostTextAreaDataType {
    letter: string,
}
