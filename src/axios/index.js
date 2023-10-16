import {default as AxiosPlugin} from "./axiosPlugin";
export function curl(param) {
    {
        const {token, url, method, data} = param
        try {
            return (new AxiosPlugin(token))[method](url, data)
        } catch (e) {
            throw new Error(e.message)
        }
    }
}