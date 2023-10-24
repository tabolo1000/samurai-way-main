import React from 'react';
import styled from 'styled-components'
import {FlexWrapper} from "../FlexWrapper";
import sprite from '../../image/spite.svg'
import {StyledHeader, SvgStyled} from "./HeaderStyled";


export function Header() {
    return (
        <StyledHeader>
            {/*asdsd*/}
            <SvgStyled width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${sprite}#${'logo'}`}/>
            </SvgStyled>
        </StyledHeader>
    )
}





