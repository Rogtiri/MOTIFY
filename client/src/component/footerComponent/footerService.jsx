import React from 'react'
import style from './footerService.module.css'

const footerService = () => {
  return (
    <div className={style.footerServiceContainer}>
      <span>Послуги</span>
      <ul className={style.list}>
        <a href='#service' style={{textDecoration: 'none'}}>
          <li className={style.link}>Підбір авто</li>
        </a>
        <a href='#service' style={{textDecoration: 'none'}}>
          <li className={style.link}>Перевірка історії</li>
        </a>
        <a href='#service' style={{textDecoration: 'none'}}>
          <li className={style.link}>Технічна діагностика</li>
        </a>
        <a href='#service' style={{textDecoration: 'none'}}>
          <li className={style.link}>Допомога в оформлені</li>
        </a>  
        <a href='#service' style={{textDecoration: 'none'}}>
          <li className={style.link}>Страхування</li>
        </a>
        <a href='#service' style={{textDecoration: 'none'}}>
          <li className={style.link}>Консультація</li>
        </a>
      </ul>
    </div>
  )
}

export default footerService
