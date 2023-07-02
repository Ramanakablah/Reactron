import { useEffect, useState } from "react";
import { Fetchtime } from "../../../../APIs/Main/TIME/FetchTimemarathon";

export function useController(){

const [Timelist, setTimelist] = useState([])

   const Updation=async(a=null)=>{
    console.log(a,"calledit")
    const result = await Fetchtime()
    console.log(a,"genegrated this result",result.data)
    setTimelist(result.data)
}
   
    useEffect(()=>{
        Updation()
    },[])
    return [Timelist,Updation]
}