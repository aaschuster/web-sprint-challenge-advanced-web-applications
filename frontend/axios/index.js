// ✨ implement axiosWithAuth

import axios from "axios";
import { articlesUrl } from "../components/App"

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: articlesUrl,
        headers: {
            authorization: localStorage.getItem("token")
        }
    })
}