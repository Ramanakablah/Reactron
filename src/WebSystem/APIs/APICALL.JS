export async function apiCall(url,method="GET",header,body=null,params=null) {
    console.log(body)
  let response = await fetch("http://localhost:5000/api/v1"+url,{
    method: method,
    headers: {...header,
    // mode: 'cors'
    "content-type": "application/json"
    },
    body: JSON.stringify(body),
    params: params
  });
  let data = await response.json();
  return data;
}