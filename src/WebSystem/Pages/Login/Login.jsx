import React, { useEffect, useState, useRef } from 'react'
import style from "./Login.module.css"
import Button from '../../Widgets/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../../APIs/Main/USERS/UserLogin'


const Login = () => {

    const navigate = useNavigate();
    const [Warn, setWarn] = useState(false)

    const [LoginObject, setLoginobject] = useState(()=>{ 
        return {
        Email: "",
        Password: ""
    }
})

    const HandleChange = (e) => {
        setLoginobject( { ...LoginObject, [e.target.name]: e.target.value })
    }

    const degreesc = (ex, ey, cx, cy) => {
        const dy = cy - ey;
        const dx = cx - ex;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI

        return deg
    }

    useEffect(() => {
        const Screen = document.getElementById("Login")
        const Eyes = Array.from(document.getElementsByClassName("Eyes"))
        const rect = Eyes[0].getBoundingClientRect();
        const anchorx = rect.left + rect.width / 2, anchory = rect.top + rect.height / 2

        Screen.addEventListener("mousemove", (e) => {
            const ax = e.clientX, ay = e.clientY;
            const angle = degreesc(ax, ay, anchorx, anchory)
            Eyes.forEach((elem) => {
                elem.style.transform = `rotate(${angle + 145}deg)`
            })

        })
    })

    return (
        <div className={style.Login} id="Login">
            <div className={style.Login_Left}>
                <div className={style.Goggles}>
                    <div className={`${style.Eye} Eyes`}>
                        <div className={style.EyeBall}>
                            <div className={style.Eyelids}></div>
                        </div>
                    </div>
                    <div className={`${style.Eye} Eyes`}>
                        <div className={style.EyeBall}>
                            <div className={style.Eyelids}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.Login_Right}>
                <div className={style.Login_Body}>
                    <div className={style.Login_Head}>Login</div>
                    <div className={style.Form_Body}>
                        <label htmlFor="">Username</label>
                        <input type="text" name="Email" value={LoginObject.Email} onChange={HandleChange} />
                        <label htmlFor="">Password</label>
                        <input type="password" name="Password" value={LoginObject.Password} onChange={HandleChange} />
                    </div>
                    {Warn && <div className={style.Warn}>Entered credentials are incorrect try again with correct credentials</div>}
                    <div className={style.Option_Buttons}>
                        <Button
                            text={"Submit"}
                            category={"Success"}
                            Operation={() => {
                                userLogin(LoginObject).then((resp)=>{
                                    if(resp.status==="Success"){
                                        sessionStorage.setItem("Token",resp.data.Token)
                                        navigate("/timers") 
                                    }
                                    else{
                                        setWarn(true)
                                        setTimeout(() => {
                                            setWarn(false)
                                        }, 4000);
                                    }
                                })
                                }}
                        />
                        <Button
                            text={"Reset"}
                            category={"Warm"}
                        />
                        <Button
                            text={"Signup"}
                        />
                    </div>
                    {/* <div className={style.Other_Options}>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Login