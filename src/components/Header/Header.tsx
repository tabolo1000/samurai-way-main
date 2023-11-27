import React from 'react';
import sprite from '../../image/spite.svg'
import {ExtendNavlinkStyled, StyledHeader, SvgStyled} from "./HeaderStyled";
import {FlexWrapper} from "../FlexWrapper";


export function Header(props: any) {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between">
                <SvgStyled width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${sprite}#${'logo'}`}/>
                </SvgStyled>
                <ExtendNavlinkStyled to="/auth"> {
                    (props.authId) ? "Sign out" : "Log in"
                }</ExtendNavlinkStyled>
            </FlexWrapper>
        </StyledHeader>
    )
}




