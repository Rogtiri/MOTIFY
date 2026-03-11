import style from './footerInfo.module.css'

const FooterInfo = ({openCheck, openDocument, openGaranti}) => {


  return (
    <div className={style.footerInfoContainer}>
        <span>Корисна інформація</span>
        <ul className={style.list}>
            <li className={style.link} onClick={openCheck}>Як перевірити авто</li>
            <li className={style.link}  onClick={openDocument}>Документи для покупки</li>
            <li className={style.link}>Вартість послуг</li>
            <li className={style.link}>Часті питання</li>
            <li className={style.link}  onClick={openGaranti}>Гарантії</li>
            <li className={style.link}>Відгуки клієнтів</li>
        </ul>
    </div>
  )
}

export default FooterInfo
