import React, { useState } from 'react'
import style from "./FocusMarathon.module.css"
import Button from '../../../Widgets/Button/Button.jsx'

const FocusMarathon = () => {
  
  return (
    <div className={style.FocusMarathon}>
     <div className={style.TimeDisplay} id={"FocusathonTime"}>
      <div className={style.Focus_Hours}></div>
      <div className={style.Focus_Minutes}></div>
      <div className={style.Focus_Seconds}></div>
     </div>
     <div className={style.Clock_Buttons}><Button text={"Clock In"} category={"Warm"} /> <Button text={"Take a break"}/></div>

    </div>
  )
}

export default FocusMarathon