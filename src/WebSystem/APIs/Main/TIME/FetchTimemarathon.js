import { apiCall } from "../../APICALL.JS";

export async function  Fetchtime(){
    let resp = await apiCall(
        "/time/time",
        "GET",
        {
            Authorization:`Bearer ${sessionStorage.getItem("Token")}`
        }
    )
    return resp
}