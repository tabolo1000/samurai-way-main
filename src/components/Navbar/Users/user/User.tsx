import { Component } from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../FlexWrapper";
import { Subscribe } from "./Subscibe";
import { SamuraiAvatar } from "./Avatar";
import { ItemUser } from "../../../../api/api";
import { theme } from "../../../../styles/theme";



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
                            <SamuraiAvatar
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
export const MainUser = styled.div`
  margin-bottom: 20px;
`

const InformationUser = styled.div`
  padding: 10px;
  ${theme.fonts}
  font-size: 0.8rem;
  width: 100%;
  padding-left: 2%;
  border-radius: 20px;
  line-height: 30px;
`




//------------------types_User--------------------------------------


type UserProps = {
    item: ItemUser,
    followingInProgress: [],
    unfollowThunk: (itemId: number) => void
    followThunk: (itemId: number) => void
}


