import Http from "./httpServices";
import Config from "../config.json";

const apiEndPoint = Config.apiEndPoint+"/usstates";

export async function getUsStates() {
    const {data} = await Http.get(apiEndPoint);
    return data
}

const usstates = {
    getUsStates
};

export default usstates;
