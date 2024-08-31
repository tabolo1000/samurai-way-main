import axios from "axios";
import { ItemUser } from "../store/userReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "15f58b4b-0d66-4b69-a133-320f34b52e56"
    }
})

export const usersAPI = {
    getUsers(page: number) {
        return instance.get<ResponseGetUsers>(`users?page=${page}`)
            .then(res => {  return res.data })
    },
    setUsers() {
        return instance.get<ResponseGetUsers>(`users`)
            .then(res => { debugger; return res.data })
    },
    setUserFollowing(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    deleteUserUnfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    }
}

type ResponseGetUsers = {
    error: null | string,
    items: ItemUser[],
    totalCount: number
}

type ResponseType = {
    data: {},
    fieldsError: string[],
    messages: string[],
    resultCode: number,
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    }
}


