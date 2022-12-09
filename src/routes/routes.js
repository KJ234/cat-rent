import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Bookings from '../pages/bookings'
import Sellcar from '../pages/sellcar'
import Setting from '../pages/setting'

function routes() {
  return (

      <Routes>
        <Route path='/' element={<Navigate to='/dasboard' element={< Dashboard />} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/sell-car' element={<Sellcar />} />
      </Routes>

  )
}

export default routes
