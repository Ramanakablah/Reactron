import React from 'react'
import style from "./FocusMarathon.module.css"
import Timelist from '../../PreviousTimelists/Timelist/Timelist'
import Clock from '../../Clocks/MarathonClock/Clock'
import Navbar from '../../Navbar/Navbar.jsx'
import { useController } from './Controllers/useController'

const FocusMarathon = () => {

  const [list,update]=useController()

  return (
    <div className={style.FocusMarathon}>
      <div className={style.FocusMarathon_Content}>
        <Clock updatelist={update}/>
        <Timelist list={list} />
      </div>
      <Navbar color={"#ec8c74"} />
    </div>
  )
}

export default FocusMarathon