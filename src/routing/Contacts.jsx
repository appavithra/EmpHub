import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contacts = () => {
  return (
    <div className='ContactMain'>
      <div className="contactleft">
        <h2>Our Contact</h2>
      </div>
      <div className="contactRight">
        <div className="details">
        <div className="mail">
          <span><MdEmail /></span><span id='cont'>Email</span>
          <p>Our friendly team is here to help</p>
          <p>foodcorner@gmail.com</p>
        </div>
        <div className="office">
        <span><FaLocationDot /></span><span id='cont'>Location</span>
          <p>Come say hello at our office HO</p>
          <p>123 Rock Street, 30 Avenue</p>
          <p>New York, NY.</p>
        </div>
        <div className="phone">
        <span><FaPhone /></span><span id='cont'>Phone</span>
          <p>Mon-Fri  from 8am to 5pm</p>
          <p>1234576893</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
