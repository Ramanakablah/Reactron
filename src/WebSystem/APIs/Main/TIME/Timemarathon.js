import { apiCall } from "../../APICALL.JS";

export async function UploadTime(body){
    let resp = await apiCall(
        "/time/generate-slot",
        "POST",
        {
            Authorization: `Bearer ${sessionStorage.getItem("Token")}`
        },
        body
    )

    return resp
}