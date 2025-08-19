import React from 'react'
import car from '../../assets/car.svg'
import style from './nav.module.css'
import { FaPhoneAlt } from "react-icons/fa";


const Navigation = () => {
  return (
    <div className={style.navContainer}>
        <div className={style.logoContainer}>
            <img src={car} />
            <span className={style.title}>MOTIFY</span>
        </div>
        <nav className={style.linkContainer}>
            <a href='#service' className={style.link}>Послуги</a>
            <a href='#advatage' className={style.link}>Переваги</a>
            {/* <a href='#' className={style.link}>Відгуки</a> */}
            <a href='#order' className={style.link}>Контакти</a>
        </nav>
        <nav className={style.linkContactContainer}>
            <FaPhoneAlt className={style.icon}/>
            <a href='tel: +380935550574' className={style.linkContact}>
                +38 (093) 555-05-74
            </a>
        </nav>
    </div>
  )
}

export default Navigation
