import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";


export const Users = (props: any) => {
    let newUsers = () => [
        {
            id: 1,
            img: "https://www.facebook.com/photo/?fbid=235045017455756&set=ecnf.100028507771963",
            followed: "follow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now",
            location: {
                city: "Ternople",
                country: "Ukraine"
            }
        },
        {
            id: 1,
            img: "https://www.facebook.com/photo/?fbid=235045017455756&set=ecnf.100028507771963",
            followed: "follow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now"
        },
        {
            id: 1,
            img: "https://www.facebook.com/photo/?fbid=235045017455756&set=ecnf.100028507771963",
            followed: "follow",
            fullName: "Kamila",
            status: "I'm looking for a Job right now",
        },
    ]
    return (
        <>
            <MainBlockStyled>
                <h1>Users</h1>

                {props.users.map((item: any, index: number) => {
                    return (
                        <MainBlockStyled>
                        <FlexWrapper>
                            <>
                                <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                                    <div>
                                        <ImageStyled
                                            src={props.users[index].img}
                                            alt=""/>
                                    </div>
                                    <div>
                                    {(props.users[index].followed === "Follow") ?
                                        <ButtonFollowStyled onClick = { ()=> {
                                            props.unfollow(props.users[index].id)
                                        }}> {props.users[index].followed}</ButtonFollowStyled> :
                                        <ButtonUnfollowStyled onClick = {() => {
                                            props.follow(props.users[index].id)
                                        }}>{props.users[index].followed}</ButtonUnfollowStyled>
                                    }
                                    </div>
                                </FlexWrapper>

                            </>
                            <InformationUser>
                                <h3>{props.users[index].fullName}</h3>
                                <p>{props.users[index].status}</p>
                                <h3>{props.users[index].location.country}</h3>
                                <h3>{props.users[index].location.city}</h3>
                            </InformationUser>
                        </FlexWrapper>
                        </MainBlockStyled>
                    )
                })}
            </MainBlockStyled>
        </>
    );
};



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


