import React from 'react';
import styled from 'styled-components'
import {FlexWrapper} from "../../components/FlexWrapper";
import sprite from '../../image/spite.svg'


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

const SvgStyled = styled.svg`
  fill: transparent;
  margin: 7px 40px;
`

const StyledHeader = styled.div`
  grid-area: header;
  background: rgba(132, 255, 0, 0.75);
`


