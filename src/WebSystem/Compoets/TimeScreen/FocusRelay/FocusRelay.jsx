import React from 'react'
import style from "./Focusrelay.module.css"
import { Link } from 'react-router-dom'
import PomodoraClock from '../../Clocks/PomodoraClock/PomodoraClock.jsx'
import Navbar from '../../Navbar/Navbar.jsx'

const FocusRelay = () => {
  return (<div className={style.FocusRelay}>
    <PomodoraClock/>
    <Navbar color={"#4d0482"}/>
  </div>
  )
}

export default FocusRelay