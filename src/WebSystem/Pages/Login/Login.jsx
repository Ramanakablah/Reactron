import React, { useEffect, useState, useRef } from 'react'
import style from "./Login.module.css"
import Button from '../../Widgets/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const [LoginObject, setLoginobject] = useState({
        username: "",
        password: ""
    })

    const HandleChange = (e) => {
        setLoginobject({ ...LoginObject, [e.target.name]: e.target.value })
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
                        <input type="text" name="username" value={LoginObject.username} onChange={HandleChange} />
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" value={LoginObject.password} onChange={HandleChange} />
                    </div>
                    <div className={style.Option_Buttons}>
                        <Button
                            text={"Submit"}
                            category={"Success"}
                            Operation={() => { console.log(LoginObject); navigate("/timers") }}
                        />
                        <Button
                            text={"Reset"}
                            category={"Warm"}
                        />
                    </div>
                    <div className={style.Other_Options}>
                        <Button
                            text={"Signup"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login