import React, { useEffect, useRef, useState } from 'react'
import style from "./Zenmode.module.css"
import { Link } from 'react-router-dom'
import { doublezero } from '../../../Methods/Doublezero'
import sage from "../../../../Assets/Images/MONK.png"
import Button from '../../../Widgets/Button/Button.jsx'
import Modal from "../../MODAL/Modal"
import ModalContent from './ModalContent/ModalContent.jsx'
import Navbar from '../../Navbar/Navbar.jsx'

const ZenMode = () => {
  const [Timespan, setTimespan] = useState(5);
  const [startTime, setstartTime] = useState(true)
  const [RunningTime, setRunningTime] = useState([0, 0])
  const [Asked, setAsked] = useState(false)
  const [Learnt, setLearnt] = useState("")
  const ref = useRef(null)
  const [List, setList] = useState([])
  const [Show_Info, setShow_Info] = useState(false)
  const [ShowModal, setShowModal] = useState(false)

  const Closeit = () => {
    setShowModal(false)
  }

  const Settings = (Changes) => {
    console.log(Changes)
    setRunningTime([0, 0])
    setTimespan(Changes?.Timespan)
  }

  const StartTimer = () => {
    if (startTime) {
      setstartTime(false)
      Stratcounter()
    }
  }
  const Stratcounter = () => {
    let Enli = document.getElementsByClassName("Enlightment")[0]
    let LearnT = document.getElementsByClassName("LearningTab")[0]
    ref.current = setInterval(() => {
      let sec = (RunningTime[1]++) % 60;
      let min = (sec === 59 ? RunningTime[0]++ : RunningTime[0]) % 60;
      Enli.style.background = `radial-gradient(rgb(255, 255, 0)10%,white ${((min * 60) + sec) * (140 / (Timespan * 60))}%)`
      if (min === Timespan && sec === 0) {
        clearInterval(ref.current)
        setstartTime(true)
        LearnT.style.display = 'flex'
        setTimeout(() => {
          setAsked(true)
        }, 10);
      }
      setRunningTime([min, sec]);
    }, 10);
  }
  const StopTimer = () => {
    clearInterval(ref.current)
    setstartTime(true)
  }

  return (<div>
    <div className={style.zenMode}>
      {ShowModal && <Modal ModalContent={<ModalContent Save={Settings} Closeit={Closeit} InitialSetting={{ Timespan }} />} Closeit={() => { Closeit() }} />}
      <div className={style.ZenWrapper}>
        <div className={style.ZenMode}>
          <div className={style.Info_Wrapper}>
            <i className="fa-solid fa-circle-info" onClick={() => { setShow_Info(!Show_Info) }}></i>
            <div className={style.Info}>
              {Show_Info &&
                <div>
                  <p>
                    This method is developed with intention to provide you a working partner
                    perform your tasks alongside with this sage seeking for "Enlightenment".
                    <br />
                    Once He get enlighted he will ask you about your performance during his meditating period.
                    So that you can keep track of your development during the session
                  </p>
                </div>
              }
            </div>
          </div>
          <div className={`${style.Enlighting} Enlightment`}>
            <div className={style.SageSitting}>
              <img src={sage} alt="" />
            </div>
          </div>
          <div className={style.Timetoelighten}>
            <h1>{Timespan - RunningTime[0]} to go</h1>
          </div>
          <div>
          </div>
          <div className={style.Buttons}>
            <div className={style.Button} onClick={() => {
              if (startTime) {
                StartTimer()
              }
              else {
                StopTimer()
              }
            }}>
              {startTime ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
            </div>
          </div>
        </div>
        <div data-index={Asked ? "Show" : "Hide"} className={`${style.ZenLearning} LearningTab`}>
          <div className={style.ZenLearn_Head}>So Dear What Have you learnt</div>
          <div className={style.ZenLearn_Note}>
            <label htmlFor="">Enter your note at</label> <span>{Date().split(" ")[4].split(":")[0]} : {Date().split(" ")[4].split(":")[1]}</span>
            <input type="text" value={Learnt} onChange={(e) => {
              setLearnt(e.target.value)
            }} /> <Button category={"Success"} text={"Ok"} Operation={() => {
              let x = [...List]
              x.push({
                time: `${Date().split(" ")[4].split(":")[0]} : ${Date().split(" ")[4].split(":")[1]}`,
                note: Learnt
              })
              setList(x)
              setRunningTime([0, 0])
              setLearnt("")
              setAsked(false)
              setTimeout(() => {
                document.getElementsByClassName("LearningTab")[0].style.display = "none"
              }, 700)
            }} />
          </div>
          {List.length > 0 ? <div className={style.LearntList}>
            {List.map((elem) => {
              return <div className={style.ZenNote}>
                <p>
                  <span>{elem.time}</span>
                  {elem.note}
                </p>
              </div>
            })}
          </div> : null}
        </div>
      </div>
      <div className={style.ZenGear} onClick={() => {
        setShowModal(true)
      }}>
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
    <Navbar color={"#2a2af1"} />
  </div>
  )
}

export default ZenMode