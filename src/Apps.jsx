import React from 'react'
import IntroSlides from './WebSystem/Pages/StartigSlids/IntroSlides.jsx'
import { Route, Routes, HashRouter } from 'react-router-dom'
import TimerScreen from './WebSystem/Pages/Timers/TimerScreen.jsx'
import FocusMarathon from './WebSystem/Compoets/TimeScreen/FocusMarathon/FocusMarathon.jsx'
const Apps = () => {
  return (<>
    <HashRouter>
      <Routes>
        <Route path='/' element={<IntroSlides />} />
        <Route path='/timers' element={<TimerScreen />} />
        <Route path="timeto">
        <Route path='focusathon' element={<FocusMarathon/>} />
        </Route>
      </Routes>
    </HashRouter>
  </>
  )
}

export default Apps