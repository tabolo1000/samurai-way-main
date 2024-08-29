import { Component } from "react";
import styled from "styled-components";




export class Subscribe extends Component<UserProps> {
    render() {
        const {
            id,
            followed,
            followingInProgress,

            followThunk,
            unfollowThunk,
        } = this.props

        return (

            (followed)
                ? <FollowButton
                    disabled={followingInProgress.some((items: any) => {
                        return id === items
                    })}
                    onClick={() => {
                        unfollowThunk(true, id, id)
                    }}>
                    Unfollow
                </FollowButton>

                : <UnfollowButton
                    disabled={this.props.followingInProgress.some((items: any) => id == items)}
                    onClick={() => {
                        followThunk(true, id, id)
                    }}>
                    Follow
                </UnfollowButton>
        )
    }

}




//------------------styled_Subscribe---------------------------

const FollowButton = styled.button`
  width: 100px;
  margin-top: 10px;
  border-radius: 3px;
  -webkit-background-clip: text;
  background-image: linear-gradient(30deg, #00e1ff, orange);
  color: transparent;
`

const UnfollowButton = styled(FollowButton)`
  background-image: linear-gradient(30deg, #ff8800, red);
`








//------------------types_subscribe----------------------------------------


type UserProps = {
    id: number,
    followed: boolean,
    followingInProgress: [],
    unfollowThunk: (isFetching: boolean, itemId: number, userIndexId: number) => void
    followThunk: (isFetching: boolean, itemId: number, userIndexId: number) => void
}