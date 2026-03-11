import style from './contactInfo.module.css'
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div>
        <div className={style.contactContainer}>
            <h3 style={{marginTop: 0, marginBottom: 35, fontSize: 24}}>Контактна інформація</h3>
            {/* Телефон */}
            <div className={style.infoContainer}>
              <div className={style.icon}>
                  <FiPhone size={23} strokeWidth={2}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                {/* текстова інформація */}
                <span>Телефон</span>
                <span style={{color: 'grey'}}>+38 (093) 555-05-74</span>
              </div>
            </div>
            {/* Емейл */}
            <div className={style.infoContainer}>
              <div className={style.icon}>
                  <CiMail size={23} strokeWidth={1.2}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                {/* текстова інформація */}
                <span>Email</span>
                <span style={{color: 'grey'}}>info@gmail.com</span>
              </div>
            </div>
            {/* Локація */}
            <div className={style.infoContainer}>
              <div className={style.icon}>
                  <CiLocationOn size={23} strokeWidth={1.2}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                {/* текстова інформація */}
                 <span>Локація</span>
                <span style={{color: 'grey'}}>Україна, Київська область</span>
              </div>
            </div>
            {/* Режим роботи */}
            <div className={style.infoContainer}>
             <div className={style.icon}>
                  <FaRegClock size={23} strokeWidth={1.2}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                {/* текстова інформація */}
                <span>Режим роботи</span>
                <span style={{color: 'grey'}}>Пн-Пт: 9:00-21:00</span>
              </div>
            </div>
          </div>
          {/* Інформаційний блок */}
         
        </div>
  )
}

export default ContactInfo
