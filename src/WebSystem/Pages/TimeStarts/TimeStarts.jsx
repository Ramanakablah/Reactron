import React from 'react'
import { Outlet } from 'react-router-dom'
import style from "./Timestart.module.css"

const TimeStarts = () => {
  return (
    <div className={style.TimeStarts}>
        <Outlet/>
    </div>
  )
}

export default TimeStarts