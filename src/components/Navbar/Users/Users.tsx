import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import axios from "axios";


export const Users = (props: any) => {
    debugger
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response: any) => {
                props.setUsers(response.data.items)
            })
    }

return (
    <>
        <MainBlockStyled>
            <h1>Users</h1>
            {props.users.map((item: any, index: number) => {

                debugger
                return (
                    <MainBlockStyled>
                        <FlexWrapper>
                            <>
                                <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                                    <div>
                                        <ImageStyled
                                            src={(props.users[index].photos.large === null)? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCpOS2pB-j57L3TGakCD768IzT27le10ZMg&usqp=CAU": props.users[index].photos.large }
                                            alt=""/>
                                    </div>
                                    <div>
                                        {(props.users[index].followed === true) ?
                                            <ButtonFollowStyled onClick={() => {
                                                props.unfollow(props.users[index].id)
                                            }}> Unfollow </ButtonFollowStyled> :
                                            <ButtonUnfollowStyled onClick={() => {
                                                props.follow(props.users[index].id)
                                            }}>Follow</ButtonUnfollowStyled>
                                        }
                                    </div>
                                </FlexWrapper>

                            </>
                            <InformationUser>
                                <h3>{props.users[index].name}</h3>
                                <p>{props.users[index].status}</p>
                                <h3>{"Ucrain"}</h3>
                                <h3>{"Ternopl"}</h3>
                            </InformationUser>
                        </FlexWrapper>
                    </MainBlockStyled>
                )
            })}
        </MainBlockStyled>
    </>
)
}

const ImageStyled = styled.img`
  width: 100px;
  border-radius: 10px;
`
const ButtonFollowStyled = styled.button`
  width: 100px;
  margin-top: 10px;
  border-radius: 3px;
  -webkit-background-clip: text;
  background-image: linear-gradient(30deg, #00e1ff, orange);
  color: transparent;
`
const ButtonUnfollowStyled = styled(ButtonFollowStyled)`
  background-image: linear-gradient(30deg, #ff8800, red);
`
const InformationUser = styled.div`
  margin: 0 2%;
  border: 1px solid olive;
  width: 100%;
  padding-left: 2%;
  border-radius: 20px;
`
const MainBlockStyled = styled.div`
  margin-bottom: 20px;
`


