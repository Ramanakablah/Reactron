import React, { useEffect, useRef, useState } from 'react'
import style from './Pomodora.module.css'
import { doublezero } from "../../../Methods/Doublezero"
import Modal from '../../MODAL/Modal'
import ModalContent from '../../TimeScreen/FocusRelay/ModalContent/ModalContent.jsx'
// import BreakSong from "../../../../Assets/Music/INF.mp3"

const PomodoraClock = () => {

    const Tref = useRef(null)
    const Bref = useRef(null)
    const [TimeBand, setTimeBand] = useState(10)
    const [TimeSpan, setTimeSpan] = useState(() => { return [0, 0] })
    const [BreakSpan, setBreakSpan] = useState(() => { return [0, 0] })
    const [BreakTime, setBreakTime] = useState(() => { return 5 })
    const [StartTimecount, setStartTimecount] = useState(true)
    const [Rounds, setRounds] = useState(() => { return 5 })
    const [Breakrunning, setBreakrunning] = useState(false)
    const [showModal, setshowModal] = useState(false)

    useEffect(()=>{
        if(window.AudioContext){
            console.log(window.AudioContext)
        }
    },[])

    //  console.log("go out")
     const Closeit=()=>{
        setshowModal(false)
     }
    const ChangeSettings=(Object)=>{
        console.log(Object)
        setBreakTime(Object.BreakTime)
        setTimeBand(Object.TimeBand)
        setRounds(Object.Rounds)
    }

    const StartTimer = () => {
        const TC = document.getElementsByClassName("Time_Count")[0]
        console.log(TC)
        console.log("StartTimer")
        if (Rounds > 0) {
            Tref.current = setInterval(() => {
                let Tspent = (TimeSpan[1]++) % 60
                let Tspentm = (Tspent === 59 ? TimeSpan[0]++ : TimeSpan[0]) % 60
                TC.style.backgroundImage = `conic-gradient(from 0deg,#e76f51 ${(Tspentm*60+Tspent) * (6/TimeBand)}deg,white -1deg)`
                if (Tspentm === TimeBand && Tspent === 1
                ) {
                    clearInterval(Tref.current)
                    setBreakSpan([0, 0])
                    setBreakrunning(true)
                    StartBreakTime()
                }
                else {
                    setTimeSpan([Tspentm, Tspent % 60])
                }
            }, 10)
        }

    }

    const StartBreakTime = () => {
        setBreakrunning(true)
        Bref.current = setInterval(() => {
            let Tspent = (BreakSpan[1]++) % 60
            let Tspentm = (Tspent === 59 ? BreakSpan[0]++ : BreakSpan[0]) % 60
            console.log("Breaktime", Tspentm, Tspent, BreakTime, TimeSpan)
            if (Tspentm === BreakTime - 1 && Tspent === 59) {
                console.log("passed it")
                setTimeSpan([0, 0]);
                setBreakSpan([0, 0])
                clearInterval(Bref.current)
                setRounds(prevround => prevround - 1)
                setBreakrunning(false)
                setStartTimecount(true)
                // StartTimer()
            }
            else {
                setBreakSpan([Tspentm, Tspent % 60])
            }
        }, 10)
    }

    const startTime = () => {
        console.log("start")
        if (StartTimecount && Rounds>0) {
            setStartTimecount(false)
            StartTimer()
        }
    }

    const Stoptimer = () => {
        setStartTimecount(true);
        clearInterval(Tref.current)
        clearInterval(Bref.current)
    }


    // <div className={style.Pomodora_Head}>Pomodora</div>
    return (<>
    {showModal && <Modal ModalContent={<ModalContent Changedata={ChangeSettings} Closeit={Closeit} Current_Data={{TimeBand,BreakTime,Rounds}}/>} Closeit={Closeit}/>}
    <div className={style.PomodoraClock}>
            <div className={`${style.Pomodora_Time_Count} Time_Count`}>
                <div className={style.Pomodora_Inner_Circle}>
                    <div>{`${doublezero(TimeSpan[0])}:${doublezero(TimeSpan[1])}`}</div>
                </div>
            </div>
            {Breakrunning && 
            <div className={style.Breakit_Now}>
            <h1>{doublezero(BreakSpan[0])}:{doublezero(BreakSpan[1])}</h1>
            <div className={style.LooseText}>
                "Hey ! Have a break you Achieved your goal. 
                <p>
                A little rest will help us to travel long distances.
                Have a Water Break 💧, Or Take a Music break 🪩" 
                </p>
            </div>
            </div>
            }
            {Rounds>0?<div className={style.Pomodora_Progress}> Rounds left {Rounds} </div>: <div> Restart Rounds</div> }
             <div>
                <audio src="../../../../Assets/Music/INF.mp3" controls></audio>
                {/* <audio src={BreakSong} controls={true}></audio> */}
             </div>
           {!Breakrunning && <div className={style.Pomodora_Button} onClick={() => {
                if (StartTimecount) {
                    startTime()
                }
                else {
                    Stoptimer()
                }
            }}>
                {/* {!StartTimecount ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>} */}
                {!StartTimecount ? "🥤" : "🏃‍♂️"}
            </div>}

        </div>
        <div className={style.Setting_Gear}>
        <i className="fa-solid fa-gear" onClick={()=>{
            setshowModal(true)
        }}></i>
        </div>
    </>
    )
}

export default PomodoraClock