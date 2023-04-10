import React from 'react'
import style from "./IntroSlides.module.css"
import Intro1 from '../../Compoets/Itros/Intro1/Intro1.jsx'
import Intro3 from '../../Compoets/Itros/Intro3/Intro3.jsx'
import Intro2 from '../../Compoets/Itros/Intro2/Intro2.jsx'
import Login from '../Login/Login.jsx'

const IntroSlides = () => {
  return (
    <div className={style.IntroSlides}>
        <Intro1/>
        <Intro2/>
        <Intro3/>
        <Login/>
    </div>
  )
}

export default IntroSlides