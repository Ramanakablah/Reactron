import React, { useEffect } from 'react'
import style from "./Slottile.module.css"

const Slottile = ({data,xkey,Clicked}) => {


  useEffect(()=>{
    const x = document.getElementsByClassName(`Time_stats${xkey}`);
      let l = data.length-1;
      let p = 80/l;
      for (let i = 0; i < data.length; i++) {
        x[i].style.transform = `rotateY(-15deg) translate(${40-i*10}px,${40-i*10}px)`;
      }
    const y = document.getElementsByClassName(`Slottile${xkey}`)[0];
    y.addEventListener("mouseenter",()=>{
      const x = document.getElementsByClassName(`Time_stats${xkey}`);
      let l = data.length-1;
      let p = 80/l;
      for (let i = 0; i < data.length; i++) {
        x[i].style.transform = `rotateY(-15deg) translate(${40-i*p}px,${40-i*p}px)`;
      }
    })
    y.addEventListener("mouseleave",()=>{
      const x = document.getElementsByClassName(`Time_stats${xkey}`);
      let l = data.length-1;
      let p = 80/l;
      for (let i = 0; i < data.length; i++) {
        x[i].style.transform = `rotateY(-15deg) translate(${40-i*10}px,${40-i*10}px)`;
      }
    })
  })

  return (
    <div className={`${style.Slottile} ${`Slottile${xkey}`}`} onClick={()=>{Clicked(data)}}>
      {data.map((elem)=>{
        return <div className={`${style.Time_stats} ${`Time_stats${xkey}`}`}>
        <div className={style.Time_stats_time}>Start Time<div className={style.Bold}>{elem.StartTime}</div></div>
        <div className={style.Time_stats_time}>Stop Time<div className={style.Bold}>{elem.EndTime}</div></div>
        <div className={style.Bold}> {elem.TotalTime} </div>
      </div> 
      })}
    </div>
  )
}

export default Slottile