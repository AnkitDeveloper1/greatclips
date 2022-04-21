import { toast } from "react-toastify";

import Http from "./httpServices";
import AuthService from "./authServices";
import Config from "../config.json";

Http.setJwt(AuthService.getToken());

const apiEndPoint = Config.apiEndPoint+"/attend";

export async function getAttendDetail(post) {
    const {data} = await Http.post(apiEndPoint+"/getattenddetail", post);
    return data;
}

export async function addAttend(post) {
    const {data} = await Http.post(apiEndPoint+"/checkin", post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function attendCheckOut(post) {
    const {data} = await Http.post(apiEndPoint+"/checkout", post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const attend = {
    getAttendDetail,
    addAttend,
    attendCheckOut
};

export default attend;
