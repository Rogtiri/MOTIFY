import React from 'react'
import style from './footerContact.module.css'
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

const FooterContact = () => {
  return (
    <div className={style.footerContactContainer}>
      <span>Контакти</span>
      <div>
        {/* Телефон */}
        <div className={style.infoContainer}>
            <FiPhone strokeWidth={2} className={style.icon}/>
            <span style={{color: 'grey'}}>+38 (093) 555-05-74</span>
        </div>
        {/* Емейл */}
        <div className={style.infoContainer}>
                <CiMail size={23} strokeWidth={1.2} className={style.icon}/>
            <span style={{color: 'grey'}}>info@gmail.com</span>
        </div>
        {/* Локація */}
        <div className={style.infoContainer}>
            <CiLocationOn size={23} strokeWidth={1.2} className={style.icon}/>
            <span style={{color: 'grey'}}>Україна, Київська область</span>
        </div>
        <div className={style.infoContainer}>
            <FaRegClock size={23} strokeWidth={1.2} className={style.icon}/>
            <span style={{color: 'grey'}}>Пн-Пт: 9:00-21:00</span>
        </div>
       </div>
    </div>
  )
}

export default FooterContact
