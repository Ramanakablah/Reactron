import React, { useEffect, useState } from 'react'
import style from "./ModalContent.module.css"
import Button from '../../../../Widgets/Button/Button.jsx'

const ModalContent = ({ Current_Data, Changedata,Closeit }) => {
  const [Change_data, setChange_data] = useState(Current_Data)
  const Timeband=["😀","😎","🏆","🎖️","⭐","👑"]
  const Breakband=["🤩","😎","😁","🙂"]
  const Rounds=["☁️","🍃","🌊","🔥"]
  const Melodies = {"🌲":"INF.mp3","🌜":"Moonlight.mp3","🌏":"PE.mp3","🎧":"Passion.mp3"}

useEffect(()=>{
  console.log(Change_data)
},[Change_data])

  return (<div className={style.ModalContent}>
    <h2>Settings</h2>
    <div className={style.Changes_List}>
      <label htmlFor="">Time Band</label>
      <div className={style.OptionList}>
        {Timeband.map((elem,id) => {
          return <div className={style.Options} onClick={()=>{
            setChange_data({...Change_data,TimeBand:(id+1)*10})
          }}>
            <span>{elem}</span>
            <div className={style.OptionValue}>
              {(id+1)*10} m
            </div>
          </div>
        })}
      </div>
      <label htmlFor="">Break Band</label>
      <div className={style.OptionList}>
        {Breakband.map((elem,id) => {
          return <div className={style.Options} onClick={()=>{
            setChange_data({...Change_data,BreakTime:(id+1)*3})
          }}>
            <span>{elem}</span>
            <div className={style.OptionValue}>
              {(id+1)*3} m
            </div>
          </div>
        })}
      </div>
      <label htmlFor="">Rounds</label>
      <div className={style.OptionList}>
        {Rounds.map((elem,id) => {
          return <div className={style.Options} onClick={()=>{
            setChange_data({...Change_data,Rounds:(id*2)+5})
          }}>
            <span>{elem}</span>
            <div className={style.OptionValue}>
              {(id*2)+6} rounds
            </div>
          </div>
        })}
      </div>
      <label htmlFor="">Melodies</label>
      <div className={style.OptionList}>
        {Object.keys(Melodies).map((elem,id) => {
          return <div className={style.Options} onClick={()=>{
            setChange_data({...Change_data,Melodyname:Melodies[elem]})
          }}>
            <span>{elem}</span>
            <div className={style.OptionValue}>
              {Melodies[elem].split(".")[0]}
            </div>
          </div>
        })}
      </div>
      <label htmlFor="">Theme</label>
      <div className={style.OptionList}>
        <div className={style.Options}>Dark</div>
        <div className={style.Options}>Light</div>
      </div>
    </div>
   <div className={style.Option_Buttons}>
    <Button text={"Save"} category={"Baby"} Operation={()=>{
      Changedata(Change_data);
      Closeit();
    }}/>
   </div>

  </div>
  )
}

export default ModalContent