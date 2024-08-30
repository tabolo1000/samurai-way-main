import { Component } from 'react';
import sprite from '../../assets/image/spite.svg'
import { s } from "./Header.styles";
import { FlexWrapper } from "../FlexWrapper";
import { Data } from '../../store/authReducer';
import { GiSamuraiHelmet } from "react-icons/gi";

type HeaderProps = {
    auth: boolean
    authId: Data
}


export class Header extends Component<HeaderProps> {
    render() {
        return (
            <s.HeaderSection>
                <FlexWrapper
                    align='center'
                    justify="space-between">
                    <s.Logo />
                    <s.LoginButton to="/auth">
                        <s.TextLogin>
                            {
                                (this.props.auth)
                                    ? "Sign out"
                                    : "Log in"
                            }
                        </s.TextLogin>
                    </s.LoginButton>
                </FlexWrapper>
            </s.HeaderSection>
        )
    }
}



//<svg fill="#000000" width="50px" height="50px" viewBox="0 0 512 512" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
