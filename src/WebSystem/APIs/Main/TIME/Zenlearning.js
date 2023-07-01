import { apiCall } from "../../APICALL.JS";

export async function Zenlearningtosage(body){
    let resp = await apiCall(
        "/time/zen-time",
        "POST",
        null,
        body
    )
    return resp
}