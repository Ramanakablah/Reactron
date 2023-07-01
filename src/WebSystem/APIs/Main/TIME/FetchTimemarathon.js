import { apiCall } from "../../APICALL.JS";

export async function  Fetchtime(){
    let resp = await apiCall(
        "/time/time",
        "GET"
    )
    return resp
}