import React from 'react'
import Router from '../../routes/routes'
import Sidebar from '../sidebar/sidebar'
import Topnav from '../topnav/topnav'

function layout() {
  return (
    <div className='layout'>
        <Sidebar />
        <div className='main_layout'>
            <Topnav />
            <div className='content'>
                <Router />
        </div>
        </div>

    </div>
  )
}

export default layout
