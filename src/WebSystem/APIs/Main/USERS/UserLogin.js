import { apiCall } from "../../APICALL.JS";

export async function userLogin(body) {
    console.log(body)
    let response = await apiCall(
        "/user/signup",
        "POST",
        null,
        body
    )
    return response;
}