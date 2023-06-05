import React, { useState, useRef } from 'react'
import { doublezero } from '../../../Methods/Doublezero'
import Button from '../../../Widgets/Button/Button.jsx'
import style from "./Clock.module.css"

const Clock = () => {

  const [Starttime, setStarttime] = useState(() => { return [0, 0, 0] })
  const [Currenttime, setCurrenttime] = useState(() => { return [0, 0, 0] })
  const [startcount, setstartcount] = useState(() => { return true })
  const [resumecount, setresumecount] = useState(() => { return false })
  const ref = useRef(null);

  const startTimer = () => {
      if (startcount || resumecount) {
        let g = new Date();
        let h = g.getHours()
        let m = g.getMinutes();
        let s = g.getSeconds();
        setStarttime([h, m, s]);
        sessionStorage.setItem("Starttime", [h, m, s].toString())
        timecounter()
      }
  }

  const StopTimer=()=>{
    setresumecount(false)
      setCurrenttime([0, 0, 0])
      ref.current && clearInterval(ref.current)
      setresumecount(false)
      document.getElementsByClassName("HourCounter")[0].style.backgroundImage = `conic-gradient(from 0deg,rgb(0, 255, 0) 2deg,rgba(0, 255, 0, 0.595) 90deg,transparent 268deg)`;
      document.getElementsByClassName("MinuteCounter")[0].style.backgroundImage = `conic-gradient(from 0deg,rgb(0, 255, 0) 2deg,rgba(0, 255, 0, 0.595) 90deg,transparent 268deg)`;
      document.getElementsByClassName("SecondCounter")[0].style.backgroundImage = `conic-gradient(from 0deg,rgb(0, 255, 0) 2deg,rgba(0, 255, 0, 0.595) 90deg,transparent 268deg)`;
  }

  const timecounter = () => {
    let hc = document.getElementsByClassName("HourCounter")[0];
    let mc = document.getElementsByClassName("MinuteCounter")[0];
    let sc = document.getElementsByClassName("SecondCounter")[0];

    const x = setInterval(() => {
      let s = (Currenttime[2]++) % 60;
      let m = (s === 59 ? (Currenttime[1]++) : Currenttime[1]) % 60;
      let h = ((m === 59) && (s === 59) ? (Currenttime[0]++) : Currenttime[0]);
      sc.style.backgroundImage = `conic-gradient(from -${s * 6}deg,rgb(0, 255, 0) 2deg,rgba(0, 255, 0, 0.595) 90deg,transparent 268deg)`
      mc.style.backgroundImage = `conic-gradient(from -${m * 6}deg,rgb(0, 255, 0) 2deg,rgba(0, 255, 0, 0.595) 90deg,transparent 268deg)`
      hc.style.backgroundImage = `conic-gradient(from -${h * 15}deg,rgb(0, 255, 0) 2deg,rgba(0, 255, 0, 0.595) 90deg,transparent 268deg)`
      setCurrenttime([h, m, s]);
    }, 10);
    ref.current = x;
  }

  return (
    <div className={style.Clock}>
      <div className={style.TimeDisplay} id={"FocusathonTime"}>
        <div className={`${style.Focus_Time} HourCounter`}> <div className={style.InnerDisc}> {doublezero(Currenttime[0])}<span>H</span> </div> </div><span>:</span>
        <div className={`${style.Focus_Time} MinuteCounter`}> <div className={style.InnerDisc}> {doublezero(Currenttime[1])}<span>M</span></div> </div> <span>:</span>
        <div className={`${style.Focus_Time} SecondCounter`}> <div className={style.InnerDisc}> {doublezero(Currenttime[2])}<span>S</span></div> </div>
      </div>
      <div className={style.Time_is_ok}>
        <div className={style.Time_is_ok}>{`${doublezero(Starttime[0])} : ${doublezero(Starttime[1])}`}</div>
        <div className={style.Time_is_ok_title}>Started at</div>
      </div>
      <div className={style.Clock_Buttons} ><Button text={startcount ? "Clock In" : "Clock Out"} category={startcount ? "Success" : "Warm"} Operation={() => {setstartcount(!startcount) ; startcount?startTimer():StopTimer() }} /> <Button text={resumecount ? "Resume" : "Take a break"} Operation={() => {
        if (!resumecount) {
          ref.current && clearInterval(ref.current)
          if (!startcount) {
            setresumecount(true)
          }
        }
        else {
          startTimer()
          if (!startcount) {
            setresumecount(false)
          }
        }
      }} /></div>
    </div>
  )
}

export default Clock