import {useState} from "react";
import {type} from "os";
import styled from "styled-components";

type HandlerClickType = {
    name: string,
    callBack: () => void,
}


export function HandlerClick(props: HandlerClickType) {
    function clickHandler() {
        props.callBack()
    }
    return (
        <>
            <StyledButton onClick={clickHandler}>{props.name}</StyledButton>
        </>
    )
}

const StyledButton = styled.button`
  margin: 10px;
  width: 200px;
  height: 100px;
  font-size: 30px;
  border-radius: 10px;
  background-image: linear-gradient(100deg, rgba(85, 255, 0, 0.66), #aa00ff);
  -webkit-background-clip: text;
  color: transparent;
`