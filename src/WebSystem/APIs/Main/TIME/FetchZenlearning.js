import { GetDate } from "../../../Methods/DateandTime";
import { apiCall } from "../../APICALL.JS";

export async function Learningsoftheday(){
    let resp = await apiCall(
        `/time/zenlist/${GetDate()}`,
        "GET",
    )
    return resp
}