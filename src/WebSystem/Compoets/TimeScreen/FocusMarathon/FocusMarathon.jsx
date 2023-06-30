import React from 'react'
import style from "./FocusMarathon.module.css"
import Timelist from '../../PreviousTimelists/Timelist'
import Clock from '../../Clocks/MarathonClock/Clock'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar.jsx'

const FocusMarathon = () => {
  return (
    <div className={style.FocusMarathon}>
      <div className={style.FocusMarathon_Content}>
        <Clock />
        <Timelist />
      </div>
      <Navbar color={"#ec8c74"} />
    </div>
  )
}

export default FocusMarathon