import {LinkList} from "../DialogsStyled";


interface DialogsMessageProps {
    message: string,
    id: number,
    countLikes: number,
}
export const DialogMessage = (props: DialogsMessageProps) => {
    return(
     <LinkList>{props.message}</LinkList>
    )
}