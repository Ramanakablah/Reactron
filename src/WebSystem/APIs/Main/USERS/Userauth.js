import { apiCall } from "../../APICALL.JS";

export async function Authorize(mobilenumber){
    return apiCall(
        "/user/auth",
        "POST",
        null,
        mobilenumber
    )
}