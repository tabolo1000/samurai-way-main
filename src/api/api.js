import axios from "axios";
import {setCurrentPage} from "../store/userReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "15f58b4b-0d66-4b69-a133-320f34b52e56"
    }
})

export const usersAPI = {
    getUsers(nowClickCurrentPage, currentPage) {
        return instance.get(`users?page=${nowClickCurrentPage || currentPage}`)
            .then(response => {
                return response.data
            })
    },
    setUsers(){
        return instance.get(`users`)
            .then((response => {
                return response.data
            }))
    },
    sendUserFollowing(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    deleteUserUnfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            } )
    }
}