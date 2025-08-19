import React from 'react'
import car from '../../assets/car.svg'
import style from './footerDesc.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const FooterDesc = () => {
  return (
    <div className={style.footerDescContainer}>
      <div className={style.logoContainer}>
        <img src={car} />
        <span className={style.title}>MOTIFY</span>
      </div>
      <p className={style.description}>
        Професійний підбір автомобілів з повною перевіркою історії 
        та технічного стану. Більше 8 років досвіду та 500+ задоволених 
        клієнтів.
      </p>
      <div className={style.iconContainer}>
        <a href="https://www.instagram.com/autoselect.ua/">
            <FaInstagram fill='#FF6B00' size={24} className={style.icon}/>
        </a>
        <a href="https://t.me/autoselect_ua">
            <FaTelegramPlane fill='#FF6B00' size={24} className={style.icon}/>
        </a>
        <a href="https://www.tiktok.com/@autoselect_ua">
            <FaTiktok fill='#FF6B00' size={24} className={style.icon}/>
        </a>
      </div>
    </div>
  )
}

export default FooterDesc
