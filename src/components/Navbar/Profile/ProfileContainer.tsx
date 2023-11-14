import {connect} from "react-redux";
import {Profile} from "./Profile";
import {addPostActionCreator, changePostTextAreaDataCreator} from "../../../store/profileReducer";

const mapStateToProps = (state: any) => {
    return {
        profileInfo: state.profileReducer.postsProfileData.profileInfo,
        allMyPosts: state.profileReducer.postsProfileData.allMyPosts,
        postTextAreaData: state.profileReducer.postsProfileData.postTextAreaData
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange: (message: string) => {
            dispatch(changePostTextAreaDataCreator(message))
        },
        addPost: (message:string) => {
            dispatch(addPostActionCreator(message))
        }
    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);