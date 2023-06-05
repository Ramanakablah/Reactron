import React from 'react'
import style from "./Modal.module.css"

const Modal = ({Closeit,ModalContent}) => {
  return (
    <div className={style.Modal}>
        <div className={style.Modal_Body}>
            <div className={style.Modal_Close} onClick={Closeit}><i className="fa-solid fa-xmark"></i></div>
            {ModalContent}
        </div>
    </div>
  )
}

export default Modal