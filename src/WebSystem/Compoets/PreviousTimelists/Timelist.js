import React, { useEffect, useState } from 'react'
import style from "./Timelist.module.css"
import Slottile from './Slottile/Slottile'
import Modal from '../MODAL/Modal'
import ModalContent from './ModalContent/ModalContent'
import { Fetchtime } from '../../APIs/Main/TIME/FetchTimemarathon'


const Timelist = () => {

  const [ShowModal, setShowModal] = useState(false)
  const [TimeLissts, setTimeLissts] = useState([])

  useEffect(()=>{
    Fetchtime().then((res)=>{
      console.log(res)
      setTimeLissts(res)
    })
  },[])

  const [MOdalData, setMOdalData] = useState([])

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
        {TimeLissts?.map((elem,id)=>{
          return<div><h2>{elem.Date}</h2>
            <Slottile data={elem.TimeArray} xkey={id} Clicked={showsummary}/>
          </div>
        })
        }
      </div>
    </div>
  )
}

export default Timelist