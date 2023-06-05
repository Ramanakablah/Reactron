import React from 'react'
import style from "./Focusrelay.module.css"
import { Link } from 'react-router-dom'
import PomodoraClock from '../../Clocks/PomodoraClock/PomodoraClock.jsx'

const FocusRelay = () => {
  return (<div className={style.FocusRelay}>
    <Link to={"/timers"}><div>Back</div></Link>
    <PomodoraClock/>
  </div>
  )
}

export default FocusRelay