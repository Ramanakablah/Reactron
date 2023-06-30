import { apiCall } from "../../APICALL.JS";

export async function userSignin(body) {
    let response = await apiCall(
        "/user/signup",
        "POST",
        null,
        body
    )
    return response;
}