export async function apiCall(url,method="GET",header,body=null,params=null) {
  let response = await fetch("https://time-back.onrender.com/v1"+url,{
    method: method,
    headers: {...header,
    Authorization:`Bearer ${sessionStorage.getItem("Token")}`,
    mode: 'cors',
    "content-type": "application/json"
    },
    body: body && JSON.stringify(body),
    params: params
  });
  let data = await response.json();
  return data;
}