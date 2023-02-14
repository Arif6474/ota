import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/logo/111.jpeg'
import SignIn from '../../SignIn/SignIn'
import Signup from '../../Signup/Signup'
import './Header.css'
function Header() {
  const [openModal, setOpenModal] =useState(false);
  const [openRegisterModal, setOpenRegisterModal] =useState(false)
  const handleSignIn =() =>{
    setOpenModal(!openModal)
  }
 
  return (
    <div>
      <div className="nav-large-device sticky-top">
    <div className="header-left-box">
      <div className="header-left-inner">
        <div className="logo-wrapper">
          <Link to="/" className="d-block text-reset">
            <img src={logo} alt="logo" className="img-fluid w-100 " /></Link>
        </div>
      </div>
    </div>
    <div className="header-mid-box">
      <div className="header-mid-inner">
        <div className="nav-items-wrapper">
          <ul>
            <li className="item">
              <Link to='/course-qualification' className="link">All Programs</Link>
            </li>
            <li className="item">
              <Link to='/trainers' className="link">Meet Your Trainers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="header-right-box">
      <div className="header-right-inner">
        <div className="user-wrapper">
          <Link  onClick={handleSignIn} data-bs-toggle="modal" className="box-btn">log in</Link>
          
        </div>
      </div>
    </div>
  </div>
  
    {openModal && <SignIn openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal} openModal={openModal} setOpenModal={setOpenModal}/>}
    {
      openRegisterModal && <Signup openRegisterModal={openRegisterModal} setOpenRegisterModal={setOpenRegisterModal} openModal={openModal} setOpenModal={setOpenModal}/>
    }
    </div>
  )
}

export default Header