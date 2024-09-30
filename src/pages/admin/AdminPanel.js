import React, { useState } from 'react'
import '../../../src/App.css'
import Siderbar from '../../components/Siderbar'
import Dashboard from '../../components/Dashboard'
import Header from '../../components/Header'

const AdminPanel = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Siderbar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboard />
    </div>
  )
}

export default AdminPanel
