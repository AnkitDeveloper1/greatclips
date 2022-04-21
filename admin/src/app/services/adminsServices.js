import { toast } from "react-toastify";

import Http from "./httpServices";
import AuthService from "./authServices";
import Config from "../config.json";

Http.setJwt(AuthService.getToken());

const apiEndPoint = Config.apiEndPoint+"/admins";

export async function getAdmins() {
    const {data} = await Http.get(apiEndPoint);
    return data
}

export async function getAdminRoles() {
    const {data} = await Http.get(apiEndPoint+'/getroles');
    return data
}

export async function updateAdminRoles(id, post) {
    const {data} = await Http.post(apiEndPoint+"/updateroles/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function addAdmin(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function getAdminById(id) {
    const response = await Http.get(apiEndPoint+"/"+id);
    return response.data;
}

export async function updateAdmin(id, post) {
    const {data} = await Http.put(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function deleteAdmin(id) {
    const {data} = await Http.delete(apiEndPoint+"/"+id);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const admins = {
    getAdmins,
    getAdminRoles,
    updateAdminRoles,
    addAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin
};

export default admins;
