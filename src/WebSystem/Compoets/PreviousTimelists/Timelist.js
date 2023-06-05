import React, { useState } from 'react'
import style from "./Timelist.module.css"
import Slottile from './Slottile/Slottile'
import Modal from '../MODAL/Modal'
import ModalContent from './ModalContent/ModalContent'


const Timelist = () => {

  const [ShowModal, setShowModal] = useState(false)


  const data = [
    {
      start: "12:00:00",
      stop: "6:00:00",
      duration: "4:00"
    },
    {
      start: "12:00:00",
      stop: "6:00:00",
      duration: "3:00"
    },
    {
      start: "12:00:00",
      stop: "6:00:00",
      duration: "3:00"
    },
    {
      start: "12:00:00",
      stop: "6:00:00",
      duration: "4:00"
    }
  ]
  const data2 = [
    { start: "12:00:00", stop: "6:00:00", duration: "4:00" },
    { start: "12:00:00", stop: "6:00:00", duration: "3:30" },
    { start: "12:00:00", stop: "6:00:00", duration: "2:45" },
    { start: "12:00:00", stop: "6:00:00", duration: "4:15" }]


  const [MOdalData, setMOdalData] = useState(data)

  const Closeit = () => {
    setShowModal(false)
  }

const showsummary=(Data)=>{
  setMOdalData(Data)
  setShowModal(true)
}

  return (
    <div className={style.Timelist}>
      {ShowModal && <Modal Closeit={Closeit} ModalContent={<ModalContent Data={MOdalData} />} />}
      <div className={style.Timelist__title}>
        <h2>Previous Timelists</h2>
      </div>
      <div className={style.Timelist__list}>
        <Slottile data={data} xkey={1}  Clicked={showsummary}/>
        <Slottile data={data2} xkey={2} Clicked={showsummary}/>
        <Slottile data={data} xkey={3} Clicked={showsummary}/>
        <Slottile data={data2} xkey={4} Clicked={showsummary}/>
      </div>
    </div>
  )
}

export default Timelist