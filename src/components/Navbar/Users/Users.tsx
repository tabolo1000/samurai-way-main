import styled from "styled-components";
import { FlexWrapper } from "../../FlexWrapper";
import { usersType } from "./UsersContainer";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";
import { User } from "./user/User";




export const Users = ({
    followThunk,
    users,
    
    currentPage,
    isFetching,
    totalCount,
    unfollowThunk,
    toggleFollowingInProgress,
    followingInProgress,

    getPage,
}: propsType) => {


    const paginationHandler = (page: number) => {
        getPage(page);
    } 

    const fetchingIs = () => {

        if (isFetching === false) {
            return (
                users.map((item: any, index: number) => {
                    return (
                       <User 
                            item={item}
                            followingInProgress={followingInProgress}
                            unfollowThunk={unfollowThunk}
                            followThunk={followThunk}
                       />
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
                <Pagination
                    onChange={paginationHandler}
                    defaultCurrent={1}
                    total={totalCount} />
            </PaginationStyled>
            {fetchingIs()}

        </MainBlockStyled>
    </>
}

//------------------------------------------------------------
// {pathPages}
























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





//-------------------Type-of-User-----------------------------


interface propsType {
    //followThunk: (usersId: number) => void,
    followThunk: any,
    unfollowThunk: (isFetching: boolean, itemId: number, userIndexId: number) => void,
    //setUsers: (users: itemsType) => void,
    users: usersType[],
    
    currentPage: number,
    totalCount: number,
    isFetching: any,
    followingInProgress: any
    toggleFollowingInProgress: any,

    getPage: (currentNumber: number) => void,
}
