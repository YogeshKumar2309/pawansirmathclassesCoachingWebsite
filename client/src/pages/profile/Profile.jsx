import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <nav className='space-x-3 caret-lime-400'>
        <NavLink to="/profile/admin" >Admin</NavLink>
        <NavLink to="/profile/user" >UserProfile</NavLink>
      </nav>

      <div><Outlet /></div>

    </div>
  )
}

export default Profile