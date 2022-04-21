import { toast } from "react-toastify";

import Http from "./httpServices";
import Config from "../config.json";

const apiEndPoint = Config.apiEndPoint+"/user";
const TokenKey = "token";

export async function register(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        localStorage.setItem(TokenKey, data.token);
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
    return data.success;
}

const reg = {
    register,
};

export default reg;
