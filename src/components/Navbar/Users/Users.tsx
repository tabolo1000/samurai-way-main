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
            status: "I'm looking for a Job right now"
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
            fullName: "Nik",
            status: "I'm looking for a Job right now"
        },
    ]
    return (
        <>
            <MainBlock>
                <h1>Users</h1>

                <FlexWrapper>
                    <>
                        <div>
                            <div>
                                <ImageStyled
                                    src={"https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B"}
                                    alt=""/>
                            </div>
                            {<ButtonStyled>Follow</ButtonStyled>}
                        </div>

                    </>
                    <InformationUser>
                        <h3>Kamila Sirenko</h3>
                        <p>I'm so pretty</p>
                        <h3>Ukraine</h3>
                    </InformationUser>
                </FlexWrapper>
            </MainBlock>
            <MainBlock>
                <FlexWrapper>
                    <>
                        <div>
                            <div>
                                <ImageStyled
                                    src={"https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B"}
                                    alt=""/>
                            </div>
                            <ButtonStyled>Follow</ButtonStyled>
                        </div>

                    </>
                    <InformationUser>
                        <h3>Kamila Sirenko</h3>
                        <p>I'm so pretty</p>
                        <h3>Ukraine</h3>
                    </InformationUser>
                </FlexWrapper>
            </MainBlock>
            <MainBlock>
                <FlexWrapper>
                    <>
                        <div>
                            <div>
                                <ImageStyled
                                    src={"https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/68880094_235045020789089_6371964698107052032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=lovJuSZlQzcAX_oxmAJ&_nc_ht=scontent-waw1-1.xx&oh=00_AfBz41MhO9fau1GJmkzAx0dc-Jq1WsDBRPrgrNLEBq-L8Q&oe=657C146B"}
                                    alt=""/>
                            </div>
                            <ButtonStyled>Follow</ButtonStyled>
                        </div>

                    </>
                    <InformationUser>
                        <h3>Kamila Sirenko</h3>
                        <p>I'm so pretty</p>
                        <h3>Ukraine</h3>
                    </InformationUser>
                </FlexWrapper>
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


