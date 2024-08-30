import { Avatar } from "antd";
import { LinkName } from "../DialogsStyled";
import { FlexWrapper } from "../../../FlexWrapper";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { RxAvatar } from "react-icons/rx";



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
        <MainDialogItem>
            <Companion>
                <FlexWrapper
                    direction="column"
                    justify="center"
                >
                    <Avatar
                        size={100}
                        src={image}
                    />
                    <div>
                        <LinkName to={path}>
                            {name}
                        </LinkName>
                    </div>
                </FlexWrapper>
            </Companion>
            <HARD_CODE_User_auto>
                <Companion>
                    <FlexWrapper
                        direction="column"
                        justify="center"
                    >
                        <Avatar
                            size={100}
                            src={<RxAvatar size={"large"}/>}
                        />
                        <div>
                            <LinkName to={path}>
                                You
                            </LinkName>
                        </div>
                    </FlexWrapper>
                </Companion>
            </HARD_CODE_User_auto>
        </MainDialogItem>
    )
}


const MainDialogItem = styled.div`
    
`
const Companion = styled.div`
    position: absolute;
    ${theme.fonts};
`
const HARD_CODE_User_auto = styled.div`
     position: absolute;
     ${theme.fonts};
     right: 100px;
     top: 10px;
     text-align:center;
`