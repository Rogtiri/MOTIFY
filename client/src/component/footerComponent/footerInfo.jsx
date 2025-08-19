import React from 'react'
import style from './footerInfo.module.css'

const FooterInfo = () => {
  return (
    <div className={style.footerInfoContainer}>
        <span>Корисна інформація</span>
        <ul className={style.list}>
            <li className={style.link}>Як перевірити авто</li>
            <li className={style.link}>Документи для покупки</li>
            <li className={style.link}>Вартість послуг</li>
            <li className={style.link}>Часті питання</li>
            <li className={style.link}>Гарантії</li>
            <li className={style.link}>Відгуки клієнтів</li>
        </ul>
    </div>
  )
}

export default FooterInfo
