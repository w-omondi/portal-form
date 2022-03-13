import React from 'react'
import Logo from './countylogo.jpg'

export default function AdminHeader() {
    return (
        <div className="admin-header">
            <div style={{display:"flex",flexDirection:"column",width:"30%",textAlign:"center"}}>
                <img className='Logo' src={Logo} alt="avator" />
                <span>County Government of Busia</span>
            </div>
            <span>BCPSB CAPTURED DATA</span>
        </div>
    )
}
