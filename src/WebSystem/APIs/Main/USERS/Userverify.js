import { apiCall } from "../../APICALL.JS";

export async function Userverify(body){
    let response = await apiCall(
        "/user/verify",
        "POST",
        null,
        body
    )
    console.log(response)
    // response = await response.json()
    if(response.status==="approved"){
        return true
    }
    else{
        return false
    }
}