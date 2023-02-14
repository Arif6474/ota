import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import facebook from '../../../assets/images/icon-svg/facebook.svg'
import instagram from '../../../assets/images/icon-svg/instagram.svg'
import twitter from '../../../assets/images/icon-svg/twitter.svg'
import linkedin from '../../../assets/images/icon-svg/linkedin.png'
import location from '../../../assets/images/icon-svg/location.svg'
import phone from '../../../assets/images/icon-svg/land-phone.svg'
import email from '../../../assets/images/icon-svg/email.svg'
import logo from '../../../assets/images/logo/footer-logo.jpeg'

import axios from 'axios'
import { CONTACT_INFOS_API } from '../../../Utilities/APIs'
function Footer() {
  const [contactInfos, setContactInfos] = useState([])
    useEffect(() => {
      const getContactInfos = async() => {
            const { data } = await axios.get(CONTACT_INFOS_API);
            setContactInfos(data)
        }
        getContactInfos()
    }, [])
  return (
    <div>
          <div className="footer">
    <div className="container">
      <div className="footer_content">
        <div className="footer-logo">
          <div className="footer-logo-wrapper">
            <Link href="/" className="d-block">
              <img src={logo} alt="logo" className="img-fluid w-100" />
            </Link>
          </div>
        </div>
        <div className="social_logo">
          <div className="social-wrapper">
          {
               contactInfos?.map(contactInfo => 
            <ul key={contactInfo._id}>
              <li>
                <Link to={`/${contactInfo.facebook}`}>
                  <img className="img-fluid" src={facebook} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link to={`/${contactInfo.instagram}`}>
                <img className="img-fluid" src={instagram} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link to={`/${contactInfo.twitter}`}>
                  <img className="img-fluid" src={twitter} alt="twitter" />
                </Link>
              </li>
              <li>
                <Link to={`/${contactInfo.twitter}`}>
                  <img className="img-fluid" src={linkedin} alt="twitter" />
                </Link>
              </li>
            </ul>
                )
            }
          </div>
        </div>
      </div>
      <div className="footer_content">
        <div className="about_ica">
          <div className="footer-info-box footer-title">
            <h5>About ICA</h5>
            <p className="text">
              Interport Corporate Academy (ICA) is a sister concern of Interport Group and has been formed in 2016 with
              the vision to develop skilled human resources in the supply chain, logistics and transport sector in
              Bangladesh. ICA offers a wide range of certificate courses and professional development programs through
              its world class resource persons using state of the art facilities and highly effective work based
              learning processes. Interport Corporate Academy is also accredited by the Chartered Institute of Logistics
              and Transport (CILT), International (UK) to provide the globally recognized CILT International Diploma and
              Certificate courses in Logistics and Transport in Bangladesh.
            </p>
          </div>
        </div>
        <div className="contact-us">
          <div className="social-wrapper social_icon">
            {
               contactInfos?.map(contactInfo => 
            <ul key={contactInfo._id}>
              <li>
                <Link to={`/${contactInfo.facebook}`}>
                  <img className="img-fluid" src={facebook} alt="facebook" />
                </Link>
              </li>
              <li>
                <Link to={`/${contactInfo.instagram}`}>
                <img className="img-fluid" src={instagram} alt="instagram" />
                </Link>
              </li>
              <li>
                <Link to={`/${contactInfo.twitter}`}>
                  <img className="img-fluid" src={twitter} alt="twitter" />
                </Link>
              </li>
              <li>
                <Link to={`/${contactInfo.twitter}`}>
                  <img className="img-fluid" src={linkedin} alt="twitter" />
                </Link>
              </li>
            </ul>
                )
            }
          </div>
          <div className="footer-contact-box footer-title">
            <h5>Contact Us</h5>
            {
              contactInfos?.map(contactInfo => 
            <ul key={contactInfo._id}>
              <li>
                <p className="icon">
                  <img className="img-fluid" src={location} alt="location" />
                </p>
                <p className="address">{contactInfo.address}</p>
              </li>
              <li>
                <p className="icon">
                  <img className="img-fluid" src={phone} alt="land-phone" />
                </p>
                <p>{contactInfo.contact}</p>
              </li>
              <li>
                <p className="icon">
                  <img className="img-fluid" src={email} alt="mail-box" />
                </p>
                <p>{contactInfo.email}</p>
              </li>
            </ul>
                
                )
            }
          </div>
        </div>
      </div>
      <div className="footer_content">
        <div className="copyright-content">
          <div className="copyright">
            <p>&copy; Copyright 2020 -
              <script>document.write(new Date().getFullYear())</script>
            </p>
            <div className="gray-round">
              <div></div>
            </div>
            <p>All rights reserved by <a href="index.html" className="text-reset">Antopolis</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Footer