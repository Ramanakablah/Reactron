import React, { useEffect, useState } from 'react'
import style from "./ModalContent.module.css"
import { doublezero } from '../../../Methods/Doublezero'
const ModalContent = ({ Data }) => {

    const [MaxHrs, setMaxHrs] = useState(0)
    const [MinHrs, setMinHrs] = useState(24)
    const [TotalHrs, setTotalHrs] = useState(0)
    const [TotalMins, setTotalMins] = useState(0)


useEffect(()=>{
    let max=0,min=24,tot=0,totm=0;
    Data.forEach(elem => {
    if (Number(elem.TotalTime?.split(":")[0]) > max) {
        max = Number(elem.TotalTime?.split(":")[0])
    }
    if (Number(elem.TotalTime?.split(":")[0]) < min) {
       min = Number(elem.TotalTime?.split(":")[0])
    }
    totm+=Number(elem.TotalTime?.split(":")[1])
    tot+=(Number(elem.TotalTime?.split(":")[0])+Math.floor(totm/60))
    totm=totm%60
})
    setMaxHrs(max)
    setMinHrs(min)
    setTotalHrs(tot)
    setTotalMins(totm)
},[])

    return (
        <div className={style.ModalContent}>
            <hr />
            <div className={style.Stat_Wrapper}>
                <div className={style.Total_Time}>
                    <div className={style.Your_Result}>Your Result</div>
                    <div className={style.Total_Time_Hour}>
                        <div>{doublezero(TotalHrs)}: {doublezero(TotalMins)} H</div>
                    </div>
                    <h2>Great</h2>
                    <div className={style.Message}>
                        You have worked {doublezero(TotalHrs)}:{doublezero(TotalMins)} H this Day in total.
                        You achieved this time by dividing your time into {Data.length} slots.
                        Your Longest slot was {doublezero(MaxHrs)} H and your shortest slot was {doublezero(MinHrs)} H.
                    </div>
                </div>
                <div className={style.TimeList_Wrapper}>
                <h2>Summary</h2>
                    {Data.map((elem) => {
                        return <div className={style.ModalContent_list_item}>
                            <div className={style.Start_Time}>
                                <h5>Start Time</h5>
                                <span>{elem.StartTime}</span>
                            </div>
                            <div className={style.Stop_Time}>
                                <h5>Stop Time</h5>
                                <span>{elem.EndTime}</span>
                            </div>
                            <div className={style.Time}>
                                <span>{elem.TotalTime} H</span>
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ModalContent