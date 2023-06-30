import React, { useRef, useState } from 'react'
import style from "./Signin.module.css"
import Button from '../../Widgets/Button/Button.jsx'
import { userSignin } from '../../APIs/Main/USERS/UserSignin'
import { Authorize } from '../../APIs/Main/USERS/Userauth'
import { Userverify } from '../../APIs/Main/USERS/Userverify'
import Modal from '../../Compoets/MODAL/Modal'
import ModalContent from './ModalContent/ModalContent.jsx'

const Signin = () => {
    const formref = useRef(null)
    const [Showmodal, setShowmodal] = useState(false)
    
    const Closeit=()=>{
        setShowmodal(false)
    }
    
    const Verify=async (otp)=>{
        console.log(otp)
        const data = new FormData(formref.current)
        const body = Object.fromEntries(data)
        Userverify({Mobile:body.Mobile,otp:otp}).then((res)=>{
            console.log(res)
            if(res){
                userSignin(body).then((res)=>{
                    console.log(res)
                })
                return true
            }
            else{
                return false
            }
        })
    }
    
    return (
        <div className={style.Signin}>
            {Showmodal && <Modal ModalContent={<ModalContent Operation={Verify} Closeit={Closeit} />} Closeit={Closeit}/>}
            <div className={style.SigninForm}>
                <h1>Signin</h1>
                <form ref={formref} action="" className={style.FormComponent}>
                    <div className={style.Inputs}>
                        <label htmlFor="">Username</label>
                        <input type="text" name={"Username"} />
                    </div>
                    <div className={style.Inputs}>
                        <label htmlFor="">Password</label>
                        <input type="password" name={"Password"} />
                    </div>
                    <div className={style.Inputs}>
                        <label htmlFor="">Contact Number</label>
                        <input type="Number" name={"Mobile"} />
                    </div>
                    <div className={style.Inputs}>
                        <label htmlFor="">Email</label>
                        <input type="email" name={"Email"} />
                    </div>
                </form>
                <div className={style.Buttons}>
                    <Button text={"Submit"} category={"Success"} Operation={async ()=>{
                            const data = new FormData(formref.current)
                             Authorize({Mobile:data.get("Mobile")}).then((res)=>{
                                console.log(res)
                                setShowmodal(true)
                             })
                    }}/>
                    <Button text={"Cancel"} category={"Warm"} Operation={()=>{
                    }}/>
                    <Button text={"Login"} category={"Pois"} Operation={()=>{
                        console.log("canceled")
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default Signin