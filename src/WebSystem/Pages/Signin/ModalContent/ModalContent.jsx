import React, { useState } from 'react'
import style from "./Modalcontent.module.css"
import Button from '../../../Widgets/Button/Button.jsx'

const ModalContent = ({ Closeit, Operation }) => {
    const [OTP, setOTP] = useState("")
    const [Warn, setWarn] = useState(false)
    return (
        <div className={style.ModalContent}>
            <h1>Verify OTP</h1>
            <div className={style.Inputs}>
                <input type="Number" value={OTP} onChange={(e) => { setOTP(e.target.value) }} />
            </div>
           {Warn && <div className={style.Warn}>Enter Correct OTP sent to your given Mobile nuber</div>}
            <button className={style.Verifyit} onClick={() => {
                if(Operation(OTP)){
                    Closeit()
                }
                else{
                    setWarn(true);
                    setTimeout(() => {
                        setWarn(false)
                    }, 3000);
                }
            }}>Verify</button>
            {/* <Button text={"Verify"} category={"Success"} Operation={() => {

            }} /> */}
        </div>
    )
}

export default ModalContent