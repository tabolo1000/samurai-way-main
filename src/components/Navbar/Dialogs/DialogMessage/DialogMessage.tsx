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
    let con = []
    if (props.isItMyMessage === true) {
        con.push(<LinkListRight><MessageStyle>{props.message}</MessageStyle></LinkListRight>)
    } else{
        con.push(<LinkListLeft><MessageStyle>{props.message}</MessageStyle></LinkListLeft>)
    }
    return (
        <>
            {con}
        </>
    )
}

const MessageStyle = styled.span`
  text-align: right;
`