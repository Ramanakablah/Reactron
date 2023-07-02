import React, { useEffect, useState } from 'react'
import style from "./Timelist.module.css"
import Slottile from '../Slottile/Slottile'
import Modal from '../../MODAL/Modal'
import ModalContent from '../ModalContent/ModalContent'
import { Fetchtime } from '../../../APIs/Main/TIME/FetchTimemarathon'
// import { useController } from '../../TimeScreen/FocusMarathon/Controllers/useController'


const Timelist = ({list}) => {
  const [ShowModal, setShowModal] = useState(false)
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
        {list?.map((elem,id)=>{
          return<div key={id+"+"+elem.Date}><h4>{elem.Date}</h4>
            <Slottile data={elem.TimeArray} xkey={id} Clicked={showsummary}/>
          </div>
        })
        }
      </div>
    </div>
  )
}

export default Timelist