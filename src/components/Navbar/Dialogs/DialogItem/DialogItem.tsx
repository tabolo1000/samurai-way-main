import { Avatar } from "antd";
import { LinkStyle } from "../DialogsStyled";
import { FlexWrapper } from "../../../FlexWrapper";



interface DialogsItemProps {
    name: string,
    id: number,
    image: string,
}

export const DialogItem = ({
    name,
    id,
    image
}: DialogsItemProps) => {
    const path = "dialogs" + id;
    return (
        <FlexWrapper
            direction="column"
            justify="center"
        >
            <Avatar size={100} src={image} />
            <div>
                <LinkStyle to={path}>
                    {name}
                </LinkStyle>
            </div>
        </FlexWrapper>
    )
}