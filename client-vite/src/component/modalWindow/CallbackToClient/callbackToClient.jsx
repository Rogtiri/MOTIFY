import style from './callbackToClient.module.css'
import { CiCircleCheck } from "react-icons/ci";

const CallbackToClient = ({onClose}) => {
  return (
    <div className={style.modalContainer}>
      <div className={style.container}>
        <div className={style.checkBackground}><CiCircleCheck className={style.check}/></div>
        <div>
          <h3 className={style.title}>Заявку отримано</h3>
          <span className={style.descBlock}>
          Наш менеджер зв’яжеться з вами для підтвердження протягом робочого дня.
          Дякуємо за звернення!</span>
        </div>
        <button className={style.btn} onClick={() => onClose()}>Зрозуміло</button>
      </div>
    </div>
  )
}

export default CallbackToClient
