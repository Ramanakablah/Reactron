import React, { useRef, useState } from 'react'
import style from './Pomodora.module.css'
import {doublezero} from "../../../Methods/Doublezero"

// const doublezero=(num)=>{
//    if(num<10){
//     return "0"+num
//    }
//    else{
//     return num
//    }
// }

const PomodoraClock = () => {

    const Tref = useRef(null)
    const Bref = useRef(null)
    const [TimeBand, setTimeBand] = useState(30)
    const [TimeSpan, setTimeSpan] = useState([0, 0])
    const [count, setcount] = useState(() => { return 0 })
    const [BreakTime, setBreakTime] = useState(() => { return 5 })
    const [StartTimecount, setStartTimecount] = useState(() => { return true })
    const [Rounds, setRounds] = useState(() => { return 5 })

    //  console.log("go out")

    const StartTimer = () => {
        console.log("StartTimer")
        Tref.current = setInterval(() => {
            let Tspent = (TimeSpan[1]++) % 60
            let Tspentm = (Tspent === 59 ? TimeSpan[0]++ : TimeSpan[0]) % 60
            console.log(Tspentm, Tspent, BreakTime)
            if (Tspentm === TimeBand) {
                clearInterval(Tref.current)
                setTimeSpan([0,0]);
            }
            else{
                setTimeSpan([Tspentm, Tspent % 60])
            }
        }, 10)
        
    }

    // const StartBreakTime = () => {
    //     console.log("Breaktime")

    //     const x = setInterval(() => {
    //         let Tspent = (TimeSpan[1]++) % 60
    //         let Tspentm = (Tspent === 59 ? TimeSpan[0]++ : TimeSpan[0]) % 60
    //         console.log("Breaktime",Tspentm, Tspent, BreakTime)
    //         if (Tspentm === BreakTime) {
    //             Tspent=Tspentm=0;
    //             clearInterval(Bref.current)
    //             setRounds(prevround=> prevround - 1)
    //             StartTimer()
    //         }
    //         setTimeSpan([Tspentm, Tspent])
    //     }, 10)
    //     Bref.current = x
    // }

    const startTime = () => {
        console.log("start")
        if (StartTimecount) {
            setStartTimecount(false)
            StartTimer()
        }
    }

    const Stoptimer=()=>{
        setStartTimecount(true); 
        clearInterval(Tref.current)
    }


    return (<div className={style.PomodoraClock}>

        <div className={style.Pomodora_Head}>pomodora</div>
        <div className={style.Pomodora_Time_Count}>
            <div className={style.Pomodora_Inner_Circle}>
                <h1>{`${doublezero(TimeSpan[0])} : ${doublezero(TimeSpan[1])}`}</h1>
            </div>
        </div>

        <div className={style.Pomodora_Progress}> {Rounds}</div>

        <div className={style.Pomodora_Button} onClick={() => {
            if(StartTimecount){
                startTime()
            }
            else{
                Stoptimer()
            }
        }}>
            {StartTimecount ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        </div>
        <div>increment</div>

    </div>
    )
}

export default PomodoraClock