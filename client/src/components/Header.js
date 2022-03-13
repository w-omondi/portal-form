import React from 'react'
import Logo from './countylogo.jpg'

export default function Header() {
  return (
    <div className="Header">
      <div></div>
      <img className='Logo' src={Logo} alt="avator" />
      <span>County Government of Busia</span>
      <span>BCPSB DATA CAPTURE FORM</span>
    </div>
  )
}
