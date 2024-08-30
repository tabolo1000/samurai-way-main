import { Component } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../FlexWrapper";
import { Subscribe } from "./Subscibe";
import { Avatar } from "./Avatar";
import { ItemUser } from "../../../../api/api";



export class User extends Component<UserProps> {
    render() {
        const {
            item,
            followingInProgress,
            followThunk,
            unfollowThunk,
        } = this.props
        return (
            <MainUser>
                <FlexWrapper>
                    <>
                        <FlexWrapper
                            justify={"center"}
                            align={"center"}
                            direction={"column"}>
                            <Avatar
                                id={item.id}
                                photos={item.photos}
                            />
                            <Subscribe
                                id={item.id}
                                followed={item.followed}
                                followingInProgress={followingInProgress}
                                followThunk={followThunk}
                                unfollowThunk={unfollowThunk}
                            />
                        </FlexWrapper>
                    </>
                    <InformationUser>
                        <h3>{item.name}</h3>
                        <p>{item.status}</p>
                        <h3>{"Ucrain"}</h3>
                        <h3>{"Ternopl"}</h3>
                    </InformationUser>
                </FlexWrapper>
            </MainUser>
        )
    }
}




//------------------styled_User-------------------------------------
const MainUser = styled.div`
  margin-bottom: 20px;
`

const InformationUser = styled.div`
  margin: 0 2%;
  border: 1px solid olive;
  width: 100%;
  padding-left: 2%;
  border-radius: 20px;
`




//------------------types_User--------------------------------------


type UserProps = {
    item: ItemUser,
    followingInProgress: [],
    unfollowThunk: (itemId: number) => void
    followThunk: (itemId: number) => void
}


