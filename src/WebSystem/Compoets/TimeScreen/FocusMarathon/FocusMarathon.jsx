import React from 'react'
import style from "./FocusMarathon.module.css"
import Timelist from '../../PreviousTimelists/Timelist'
import Clock from '../../Clocks/MarathonClock/Clock'
import { Link } from 'react-router-dom'

const FocusMarathon = () => {
  return (
    <div className={style.FocusMarathon}>
      <Link to={"/timers"}> <div className={style.Return}> Back </div> </Link> 
     <Clock/>
     <Timelist/>
    </div>
  )
}

export default FocusMarathon