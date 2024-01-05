import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {followThunk, itemsType} from "../../../store/userReducer";
import {usersType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../../api/api";


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

export const Users = ({
    follow, unfollow, setUser,
    users,getCurrentPage,
    currentPage, totalCount,
    isFatching,

}) => {
    let calculatePage = () => {
        return Math.ceil(props.totalCount / 10);
    }

    let arrIndexPages: any = [];
    for (let i = 1; i <= calculatePage(); i++) {
        arrIndexPages[i] = i;
    }
    let arrAllPages = arrIndexPages.map((items: any) => {
        return <PagePaginationStyled onClick={() => {
             getCurrentPage(items)
        }}>{items}</PagePaginationStyled>
    });
    let number = 5 - currentPage;
    let pathPages = arrAllPages.slice(
        ((currentPage - 5) < 1) ? 1 : currentPage - 5,
        ((currentPage - 5) <= 5) ? 10 - number : currentPage + 4
    )
    const fetchingIs = () => {

        if (isFetching === false) {
            return (
                users.map((item: any, index: number) => {
                    return (
                        <MainBlockStyled>
                            <FlexWrapper>
                                <>
                                    <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                                        <div>
                                            <NavLink to={`/profile/` + item.id}>
                                                <ImageStyled
                                                    src={
                                                        (users[index].photos.large === null)
                                                            ? ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCpOS2pB-j57L3TGakCD768IzT27le10ZMg&usqp=CAU")
                                                            : users[index].photos.large
                                                    }/>
                                            </NavLink>
                                        </div>
                                        <div>
                                            {(users[index].followed === true) ?
                                                <ButtonFollowStyled
                                                    disabled={followingInProgress.some((items: any) => {
                                                        // debugger;
                                                        return item.id === items
                                                    })}
                                                    onClick={() => {
                                                        unfollowThunk(true, item.id, users[index].id)
                                                    }}> Unfollow </ButtonFollowStyled> :
                                                <ButtonUnfollowStyled
                                                    disabled={followingInProgress.some((items: any) => item.id == items)}
                                                    onClick={() => {
                                                        followThunk(true, item.id, users[index].id)
                                                    }}>Follow</ButtonUnfollowStyled>
                                            }
                                        </div>
                                    </FlexWrapper>

                                </>
                                <InformationUser>
                                    <h3>{users[index].name}</h3>
                                    <p>{users[index].status}</p>
                                    <h3>{"Ucrain"}</h3>
                                    <h3>{"Ternopl"}</h3>
                                </InformationUser>
                            </FlexWrapper>
                        </MainBlockStyled>
                    )
                }))

        } else {
            return (<h3>Loading...</h3>)
        }
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
  display: inline-block;
  margin-left: 5px;

  &:hover {
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


