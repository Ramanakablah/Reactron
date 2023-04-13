import React from 'react'
import style from "./TimerScreen.module.css"
import Marathon from "../../../Assets/Images/Runner.jpeg"
import Relay from "../../../Assets/Images/Focusrelay.jpeg"
import Zen from "../../../Assets/Images/Zen.jpeg"
import Clock from "../../../Assets/Images/Clock.jpeg"
import { Link } from 'react-router-dom'

const TimeCard = ({ img, name,color }) => {
  return (<Link to={"/timeto/focusathon"}>
    <div className={style.TimeCard_Body}>
      <div className={style.Body_Image}>
        <img src={img} alt="" />
      </div>
      <div className={style.Body_Title} style={{backgroundColor:`${color}`}}>
        <div className={style.Title_Name}>{name}</div>
        <div className={style.Info} ><i className="fa-solid fa-ellipsis-vertical"></i></div>
      </div>
    </div>
  </Link>)
}


const TimerScreen = () => {
  return (<div className={style.Timescreen}>
    <div className={style.Welcome}>
      Welcome
    </div>
    <p> Choose your Mode </p>
    <div className={style.Time_Option_Wrappers}>
      <TimeCard img={Marathon} name={"Focus A thon"} color={"#d44202"} />
      <TimeCard img={Relay} name={"Focus Relay"} color={"#3a81af"} />
      <TimeCard img={Zen} name={"Zen mode"} color={"#fdc558"} />
      <TimeCard img={Clock} name={"Time Race"} color={"#3b3f42"} />
    </div>
  </div>
  )
}

export default TimerScreen