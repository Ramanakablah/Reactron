import { apiCall } from "../../APICALL.JS";

export async function UploadTime(body){
    let resp = await apiCall(
        "/time/generate-slot",
        "POST",
        null,
        body
    )

    return resp
}