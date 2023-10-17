import React, {FC, useState} from 'react';
import styled from 'styled-components'
import {type} from "os";
import {HandlerClick} from "../../components/ClickHandler";




export function Header() {
    let [getNumber, setNumber ] = useState(1)
    function ButtonFirst(massage: string){
    if(massage === "plusNumber") {
        return (
            setNumber(++getNumber)
        )
    }else if(massage === "resetNumber"){
        return (
            setNumber(
                getNumber = 0
            )
        );
    }else if(massage === "minusNumber"){
        return(
            setNumber(
                --getNumber
            )
        )
    }

    }

    return (
        <StyledWrapper>
            <NumberStyled>{getNumber}</NumberStyled>
            {/*<StyledButton onClick={(event:any)=> { HandlerClick('He is first subscriber') }}>Add</StyledButton>*/}
            <HandlerClick name={'plus'} callBack={() => {
                ButtonFirst('plusNumber')
            }}></HandlerClick>
            <HandlerClick name={'reset'} callBack={() => {
                ButtonFirst('resetNumber')
            }}></HandlerClick>
            <HandlerClick name={'minus'} callBack={() => {
                ButtonFirst('minusNumber')
            }}></HandlerClick>
            <NumberStyled>{getNumber}</NumberStyled>
        </StyledWrapper>
    );
}

const NumberStyled = styled.h1`
  margin: 30px;
`

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vw;
    justify-content: center;
    margin-right: 10px;
    align-items: center;
`


