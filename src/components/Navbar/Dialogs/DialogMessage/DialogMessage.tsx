import {LinkListLeft, LinkListRight} from "../DialogsStyled";
import styled from "styled-components";


interface DialogsMessageProps {
    message: string,
    id: number,
    countLikes: number,
    timeMessage: number,
    isItMyMessage: boolean
}


export const DialogMessage = (props: DialogsMessageProps) => {
    {
        if (props.isItMyMessage === true) {
            debugger
            return (
                <LinkListRight><MessageStyle>{props.message}</MessageStyle></LinkListRight>
            )
        } else {
            debugger;
            return (

                <LinkListLeft><MessageStyle>{props.message}</MessageStyle></LinkListLeft>
            )
        }
    }
}

const MessageStyle = styled.span`
  text-align: right;
`