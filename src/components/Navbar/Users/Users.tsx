import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";


export const Users = (props: any) => {
    let newUsers = () => [
        {
            id: 1,
            img: "https://www.facebook.com/photo/?fbid=235045017455756&set=ecnf.100028507771963",
            followed: "follow",
            fullName: "Nik",
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
            fullName: "Nik",
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
    console.log(props.users[1].img)
    return (
        <>
            <MainBlock>
                <h1>Users</h1>

                {props.users.map((item: any, index: number) => {
                    return (
                        <FlexWrapper>
                            <>
                                <div>
                                    <div>
                                        <ImageStyled
                                            src={props.users[index].img}
                                            alt=""/>
                                    </div>
                                    {(props.users[index].followed === "follow") ?
                                        <ButtonStyled>follow</ButtonStyled> :
                                        <ButtonStyled>unfollow</ButtonStyled>
                                    }
                                </div>

                            </>
                            <InformationUser>
                                <h3>{props.users[index].fullName}</h3>
                                <p>{props.users[index].status}</p>
                                <h3>{props.users[index].location.country}</h3>
                                <h3>{props.users[index].location.city}</h3>
                            </InformationUser>
                        </FlexWrapper>
                    )
                })}
            </MainBlock>
        </>
    );
};


const ImageStyled = styled.img`
  width: 100px;
  border-radius: 10px;
`
const ButtonStyled = styled.button`
  width: 100px;
  margin-top: 10px;
  border-radius: 3px;
  -webkit-background-clip: text;
  background-image: linear-gradient(30deg, #00e1ff, orange);
  color: transparent;
`
const InformationUser = styled.div`
  margin: 0 2%;
  border: 1px solid olive;
  width: 100%;
  padding-left: 2%;
  border-radius: 10px;
`
const MainBlock = styled.div`
  margin-bottom: 10px;
`


