import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../FlexWrapper";
import {allMyPropsType} from "../../../../../App";

interface postPropsType {
    allMyPosts: Array<allMyPropsType>
}

export const Post = (props: postPropsType) => {
    return (
        <div>
            {props.allMyPosts.map((index) => {
                return (<FlexWrapper align={"center"}>
                        <AvatarStyled src={`${index.image}`}/>
                        <h2>{index.message}</h2>
                    </FlexWrapper>
                )
            })
            }
            <FlexWrapper align={"center"}>
                <AvatarStyled src={"https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg"} alt=""/>
                <h2>What's you know about it</h2>
            </FlexWrapper>
        </div>
    );
};

const AvatarStyled = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  margin: 10px;
`

