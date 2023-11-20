import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import axios from "axios";
import {itemsType} from "../../../store/userReducer";


interface propsType {
    follow: (usersId: number) => void,
    unfollow: (usersId: number) => void,
    setUsers: (users: itemsType) => void,
    users: usersType[],
    setCurrentPage: (users: itemsType, currentPage: number) => void,
    currentPage: number,
    setCountUsers: (totalCount: number) => void,
    totalCount: number,
}

export interface usersType {
    followed: boolean,
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: photosType,
    status: string | null,
}

interface photosType {
    large: string | undefined,
    small: string | undefined,
}

export class Users extends React.Component<propsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.setCountUsers(response.data.totalCount)
            })
    }
    getCurrentPage = (currentPage: number) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage || this.props.currentPage}`)
            .then((response: any) => {
                 this.props.setCurrentPage(response.data.items, currentPage)
            })
    }
    calculatePage = () => {
     return   Math.ceil(this.props.totalCount / 10);
    }


    render() {
        let arrIndexPages: any = [];
        for(let i = 1; i <= this.calculatePage(); i++ ){
            arrIndexPages[i] = i;
        }
         let arrAllPages = arrIndexPages.map((items: any) => {
                            return <PagePaginationStyled onClick = {() => {this.getCurrentPage(items)}}>{items}</PagePaginationStyled>
                        });
        let number = 5 - this.props.currentPage;
        let pathPages = arrAllPages.slice(
            ((this.props.currentPage - 5) < 5) ? number : this.props.currentPage - 5,
            ((this.props.currentPage - 5) <= 5) ? 10 - number : this.props.currentPage + 4
        )
        console.log(this.props.currentPage)
        return <>
            <h1>{this.props.currentPage}</h1>
            <MainBlockStyled>
                <PaginationStyled>
                    <h1>Users</h1>
                    <ListPaginationStyled>
                        {pathPages}
                    </ListPaginationStyled>
                </PaginationStyled>
                {this.props.users.map((item: any, index: number) => {
                    return (
                        <MainBlockStyled>
                            <FlexWrapper>
                                <>
                                    <FlexWrapper justify={"center"} align={"center"} direction={"column"}>
                                        <div>
                                            <ImageStyled
                                                src={
                                                    (this.props.users[index].photos.large === null)
                                                        ? ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCpOS2pB-j57L3TGakCD768IzT27le10ZMg&usqp=CAU")
                                                        : this.props.users[index].photos.large
                                                }/>
                                        </div>
                                        <div>
                                            {(this.props.users[index].followed === true) ?
                                                <ButtonFollowStyled onClick={() => {
                                                    this.props.unfollow(this.props.users[index].id)
                                                }}> Unfollow </ButtonFollowStyled> :
                                                <ButtonUnfollowStyled onClick={() => {
                                                    this.props.follow(this.props.users[index].id)
                                                }}>Follow</ButtonUnfollowStyled>
                                            }
                                        </div>
                                    </FlexWrapper>

                                </>
                                <InformationUser>
                                    <h3>{this.props.users[index].name}</h3>
                                    <p>{this.props.users[index].status}</p>
                                    <h3>{"Ucrain"}</h3>
                                    <h3>{"Ternopl"}</h3>
                                </InformationUser>
                            </FlexWrapper>
                        </MainBlockStyled>
                    )
                })}
            </MainBlockStyled>
        </>
    }
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


