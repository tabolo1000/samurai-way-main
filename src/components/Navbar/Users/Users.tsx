import styled from "styled-components";
import { Pagination } from "antd";
import { MainUser, User } from "./user/User";

import { theme } from "../../../styles/theme";
import { ItemUser } from "../../../store/userReducer";




export const Users = ({
    users,
    currentPage,
    totalCount,
    fetching,
    followingInProgress,

    followThunk,
    unfollowThunk,
    getUsersPageThunk,
}: UserProps) => {


    const paginationHandler = (page: number) => {
        getUsersPageThunk(page);
    }

    const listUsers = () => {

        if (!fetching) {
            return (
                users.map((item: ItemUser, index: number) => {
                    return (
                        <User
                            item={item}
                            followingInProgress={followingInProgress}
                            unfollowThunk={unfollowThunk}
                            followThunk={followThunk}
                        />
                    )
                })
            )
        } else {
            return (<h3>Loading...</h3>)
        }
    }
    return <>
        <MainUsers>
            <PaginationBox>
                <SectionName>Samurai</SectionName>
                <Pagination
                    onChange={paginationHandler}
                    defaultCurrent={currentPage}
                    total={totalCount} />
            </PaginationBox>
            <ListUser>
                {listUsers()}
            </ListUser>
        </MainUsers>
    </>
}





//--------------------------Styled_Componants-------------------------

const MainUsers = styled.div`
  margin-bottom: 20px;
  max-width: 80%;
  margin: 0 auto;
  background-color: ${theme.colors.backgorundSection};
  border-radius: 20px;
  border: 2px solid ${theme.colors.borderSection};
  box-shadow: 2px -2px 50px black;
  padding: 20px;
`
const PaginationBox = styled.div`
  ${theme.fonts}
  margin: 10px 0 10px;
  text-align: center;
`
const ListUser = styled.div`
    ${MainUser} + ${MainUser} {
        border-top: 2px solid white;
    }
`

const SectionName = styled.h2`
    font-size: 40px
`
 



//-------------------Type-of-User-----------------------------


interface UserProps {
    users: ItemUser[],
    currentPage: number,
    totalCount: number,
    fetching: boolean,
    followingInProgress: [],

    followThunk: () => (id: number) => void,
    unfollowThunk: () => (id: number) => void,
    getUsersPageThunk: (page: number,) => void;
}
