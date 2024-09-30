import React from 'react'
import { BsCalendarDate, BsGrid1X2Fill, BsCalendarCheckFill, BsPeopleFill, BsCreditCardFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'



const Siderbar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCalendarDate className='icon_header' />Admin Panel
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsGrid1X2Fill className='icon' />Dashboard
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsCalendarDate className='icon' />Manage Rooms
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsCalendarCheckFill className='icon' />Bookings
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsPeopleFill className='icon' />Manage Users
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsCreditCardFill className='icon' />Payments and Billing
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsMenuButtonWideFill className='icon' />Reports
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href='/'>
                    <BsFillGearFill className='icon' />Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Siderbar
