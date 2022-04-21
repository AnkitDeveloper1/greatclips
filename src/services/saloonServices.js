import { toast } from "react-toastify";

import Http from "./httpServices";
import AuthService from "./authServices";
import Config from "../config.json";

Http.setJwt(AuthService.getToken());

const apiEndPoint = Config.apiEndPoint+"/saloons";

export async function getSaloons() {
    const {data} = await Http.get(apiEndPoint);
    return data
}

export async function addSaloon(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function getSaloonById(id) {
    const response = await Http.get(apiEndPoint+"/"+id);
    return response.data;
}

export async function updateSaloon(id, post) {
    const {data} = await Http.put(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function deleteSaloon(id, post) {
    const {data} = await Http.delete(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const saloons = {
    getSaloons,
    addSaloon,
    getSaloonById,
    updateSaloon,
    deleteSaloon
};

export default saloons;
