import React from 'react'
import style from "./Intro1.module.css"

const Intro1 = () => {
  return (
    <div className={style.Intro1}>
      <div className={style.Intro1_Left}>
        <div className={style.Heading}>About</div>
        <div className={style.Paragraph}>
        After college, Chris Bailey took a one-year sabbatical to research and conduct 
        experiments in productivity on himself, documenting his experiences on his blog,
        A Year of Productivity (later renamed A Life of Productivity).
        </div>
        <p>Kch Kaam ki baaten</p>
      </div>  
      <div className={style.Intro1_Right}>
        <img src="https://thesweetsetup.com/wp-content/uploads/2019/11/ChrisBailey_05.jpg" alt="" />
        <div className={style.Signature}>
          Chris Bailey
        </div>
      </div>
    </div>
  )
}

export default Intro1