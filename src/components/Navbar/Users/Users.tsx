import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {itemsType} from "../../../store/userReducer";
import {usersType} from "./UsersContainer";
import {NavLink} from "react-router-dom";


interface propsType {
    follow: (usersId: number) => void,
    unfollow: (usersId: number) => void,
    setUsers: (users: itemsType) => void,
    users: usersType[],
    getCurrentPage: (currentNumber: number) => void,
    currentPage: number,
    totalCount: number,
    isFetching: boolean,
}

export const Users = (props: any) => {
    let calculatePage = () => {
     return   Math.ceil(props.totalCount / 10);
    }

        let arrIndexPages: any = [];
        for(let i = 1; i <= calculatePage(); i++ ){
            arrIndexPages[i] = i;
        }
         let arrAllPages = arrIndexPages.map((items: any) => {
                            return <PagePaginationStyled onClick = {() => {props.getCurrentPage(items)}}>{items}</PagePaginationStyled>
                        });
        let number = 5 - props.currentPage;
        let pathPages = arrAllPages.slice(
            ((props.currentPage - 5) < 1) ? 1 : props.currentPage - 5,
            ((props.currentPage - 5) <= 5) ? 10 - number : props.currentPage + 4
        )
        const fetchingIs = () =>{

                if (props.isFetching === false) {
                    return (
                        props.users.map((item: any, index: number) => {
                            return (
                                <MainBlockStyled>
                                    <FlexWrapper>
                                        <>
                                            <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                                                <div>
                                                    <NavLink to = {`/profile/` + item.id}>
                                                    <ImageStyled
                                                        src={
                                                            (props.users[index].photos.large === null)
                                                                ? ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCpOS2pB-j57L3TGakCD768IzT27le10ZMg&usqp=CAU")
                                                                : props.users[index].photos.large
                                                        }/>
                                                    </NavLink>
                                                </div>
                                                <div>
                                                    {(props.users[index].followed === true) ?
                                                        <ButtonFollowStyled onClick={() => {
                                                            props.unfollow(props.users[index].id)
                                                        }}> Unfollow </ButtonFollowStyled> :
                                                        <ButtonUnfollowStyled onClick={() => {
                                                            props.follow(props.users[index].id)
                                                        }}>Follow</ButtonUnfollowStyled>
                                                    }
                                                </div>
                                            </FlexWrapper>

                                        </>
                                        <InformationUser>
                                            <h3>{props.users[index].name}</h3>
                                            <p>{props.users[index].status}</p>
                                            <h3>{"Ucrain"}</h3>
                                            <h3>{"Ternopl"}</h3>
                                        </InformationUser>
                                    </FlexWrapper>
                                </MainBlockStyled>
                            )
                        }))

                }
               else { return (<h3>Loading...</h3>)}
        }
        return <>
            <MainBlockStyled>
                <PaginationStyled>
                    <h1>Users</h1>
                    <ListPaginationStyled>
                        {pathPages}
                    </ListPaginationStyled>
                </PaginationStyled>
                {fetchingIs()}

            </MainBlockStyled>
        </>
}
const PagePaginationStyled = styled.li`
  display:inline-block;
  margin-left: 5px;
  &:hover{
    color: darkblue;
    cursor: pointer;
    transform: scale(2);
  }
`

const ListPaginationStyled = styled.ul`
  list-style: none;
  display: inline-block;
  
`
const PaginationStyled = styled.div`
  margin: 10px 0 10px;
  text-align: center;
  
`
const ImageStyled = styled.img`
  width: 100px;
  border-radius: 10px;
`
const ButtonFollowStyled = styled.button`
  width: 100px;
  margin-top: 10px;
  border-radius: 3px;
  -webkit-background-clip: text;
  background-image: linear-gradient(30deg, #00e1ff, orange);
  color: transparent;
`
const ButtonUnfollowStyled = styled(ButtonFollowStyled)`
  background-image: linear-gradient(30deg, #ff8800, red);
`
const InformationUser = styled.div`
  margin: 0 2%;
  border: 1px solid olive;
  width: 100%;
  padding-left: 2%;
  border-radius: 20px;
`
const MainBlockStyled = styled.div`
  margin-bottom: 20px;
`


