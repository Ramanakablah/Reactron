import React from 'react'
import IntroSlides from './WebSystem/Pages/StartigSlids/IntroSlides.jsx'
import { Route, Routes, HashRouter } from 'react-router-dom'
import TimerScreen from './WebSystem/Pages/Timers/TimerScreen.jsx'
const Apps = () => {
  return (<>
    <HashRouter>
      <Routes>
        <Route path='/' element={<IntroSlides />} />
        <Route path='/timers' element={<TimerScreen />} />
      </Routes>
    </HashRouter>
  </>
  )
}

export default Apps