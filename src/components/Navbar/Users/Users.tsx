import styled from "styled-components";
import { Pagination } from "antd";
import { User } from "./user/User";
import { ItemUser } from "../../../api/api";
import { theme } from "../../../styles/theme";




export const Users = ({
    users,
    currentPage,
    totalCount,
    fetching,
    followingInProgress,

    followThunk,
    unfollowThunk,
    getUsersPageThunk,
}: any) => {


    const paginationHandler = (page: number) => {
        getUsersPageThunk(page);
    }

    const listUsers = () => {

        if (!fetching) {
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
                })
            )
        } else {
            return (<h3>Loading...</h3>)
        }
    }
    return <>
        <MainUsers>
            <PaginationBox>
                <h1>Samurai</h1>
                <Pagination
                    onChange={paginationHandler}
                    defaultCurrent={currentPage}
                    total={totalCount} />
            </PaginationBox>
            {listUsers()}
        </MainUsers>
    </>
}





//--------------------------Styled_Componants-------------------------

const MainUsers = styled.div`
  margin-bottom: 20px;
  max-width: 80%;
  margin: 0 auto;
  background-color: ${theme.colors.backgorundSection};
  padding: 20px;
`
const PaginationBox = styled.div`
  margin: 10px 0 10px;
  text-align: center;
`





//-------------------Type-of-User-----------------------------


interface propsType {
    users: ItemUser[],
    currentPage: number,
    totalCount: number,
    fetching: boolean,
    followingInProgress: [],

    followThunk: () => (id: number) => void,
    unfollowThunk: () => (id: number) => void,
    getUsersPageThunk: (page: number,) => void;
}
