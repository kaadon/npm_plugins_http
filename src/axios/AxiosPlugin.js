import axios from "axios";
export class AxiosPlugin {
    axiosIns
    constructor(token = null) {
        const axiosIns = axios.create({
            timeout: 5000,
        })
        axiosIns.interceptors.request.use(config => {
            // Retrieve token from localStorage
            if (token) config.headers.APIKEY = token
            // If token is found
            return config
        })
        axiosIns.interceptors.response.use(response => {
                const {code, message, data} = response.data
                if (code === 200) {
                    return data
                } else {
                    return Promise.reject(new Error(message))
                }
            },
            error => {
                return Promise.reject(new Error(error.message))
            })
        this.axiosIns = axiosIns
    }

    get(url, data = {}) {
        try {
            //逻辑代码
            return this.axiosIns({
                url: ApiList.member.login,
                method: 'post',
                data,
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }

    post(url, data = {}) {
        try {
            //逻辑代码
            return this.axiosIns({
                url: url,
                method: 'post',
                data,
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }
}