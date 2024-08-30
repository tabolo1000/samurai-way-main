import { LinkListLeft, LinkListRight } from "../DialogsStyled";
import styled from "styled-components";


interface DialogsMessageProps {
    message: string,
    id: number,
    countLikes: number,
    timeMessage: number,
    isItMyMessage: boolean
}


export const DialogMessage = ({
    message,
    id,
    countLikes,
    timeMessage,
    isItMyMessage,
    
}: DialogsMessageProps) => {
    let con = []
    if (isItMyMessage) {
        con.push(
            <LinkListRight>
                <MessageStyle>
                    {message}
                </MessageStyle>
            </LinkListRight>
        )
    } else {
        con.push(
            <LinkListLeft>
                <MessageStyle>
                    {message}
                </MessageStyle>
            </LinkListLeft>
        )
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