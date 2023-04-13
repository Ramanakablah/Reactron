import React from 'react'
import style from "./TimerScreen.module.css"
import Marathon from "../../../Assets/Images/Runner.jpeg"

const TimeCard = ({img})=>{
   return (<>
   <div className={style.TimeCard_Body}>
    <div className={style.Body_Image}>
      <img src={img} alt="" />
    </div>
    <div className={style.Body_Title}>
      <div className={style.Title_Name}></div>
      <div className={style.Info}></div>
    </div>
   </div>
   
   </>)
}


const TimerScreen = () => {
  return (<div className={style.Timescreen}>
     <div className={style.Welcome}>
      Welcome
     </div>
     <div className={style.Time_Option_Wrappers}>
    <TimeCard img={"https://img.freepik.com/free-vector/runner-flames-flat-style_52683-16316.jpg?w=740&t=st=1681352935~exp=1681353535~hmac=830d47b989594b9836b474e565e16db8a656369481d1a0f94dfe901476be0efb"}/>
     </div>
    </div>
  )
}

export default TimerScreen