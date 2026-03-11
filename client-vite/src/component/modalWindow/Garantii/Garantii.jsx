import style from './Garantii.module.css'
import car from '../../../assets/car.svg'
import {MdCancel} from 'react-icons/md'
import { MdOutlineSecurity } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";

const Garantii = ({onClose}) => {
  return (
    <div className={style.modalContainer}>
          <div className={style.container}>
            <div className={style.titleContainer}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <img src={car} alt="car" className={style.img}/>
                <h1 className={style.titleModal}>Гарантії та відповідальність</h1>
              </div>
              <span className={style.icons} onClick={() => onClose()}> <MdCancel  className={style.icons}/></span>
            </div>
            <div className={style.description}>
              {/* Перший блок */}
              <h3 className={style.title}>Мої гарантії</h3>
              <div className={style.descBlock}>
                <div className={style.icon}>
                  <MdOutlineSecurity/>
                </div>
                <div>
                  <h4 style={{margin: 0, color: 'white', marginBottom: 10}}>100% юридична чистота</h4>
                  <p style={{margin: 0, color: 'grey'}}>Повна відповідальність за перевірку документів та відсутність обтяжень</p>
                  <ul className={style.list}>
                    <li>Перевірка по всім базам даних</li>
                    <li>Гарантії відсутності залогів</li>
                    <li>Компенсація при виявлені проблем</li>
                  </ul>
                </div>
              </div>
              {/* другий блок */}
              <div className={style.descBlock}>
                <div className={style.icon}>
                  <BsCheck2Circle/>
                </div>
                <div>
                  <h4 style={{margin: 0, color: 'white', marginBottom: 10}}>Гарантія підбору</h4>
                  <p style={{margin: 0, color: 'grey'}}>Знайду автомобіль згідно з вашими вимогами або поверну гроші</p>
                  <ul className={style.list}>
                    <li>Підбір у вказані терміни</li>
                    <li>Відповідність заявленим критеріям</li>
                    <li>100% повернення при невиконанні</li>
                  </ul>
                </div>
              </div>
              {/* третій блок */}
              <div className={style.descBlock}>
                <div className={style.icon}>
                  <RiContactsLine/>
                </div>
                <div>
                  <h4 style={{margin: 0, color: 'white', marginBottom: 10}}>Технічна гарантія</h4>
                  <p style={{margin: 0, color: 'grey'}}>Відповідність технічного стану заявленому у звіті</p>
                  <ul className={style.list}>
                    <li>Професійна діагностика</li>
                    <li>Детальний звіт про стан</li>
                    <li>Компенсація прихованих дефектів</li>
                  </ul>
                </div>
              </div>
              {/* четвертий блок */}
              <div className={style.descBlock}>
                <div className={style.icon}>
                  <FaRegClock/>
                </div>
                <div>
                  <h4 style={{margin: 0, color: 'white', marginBottom: 10}}>Підтримка після покупки</h4>
                  <p style={{margin: 0, color: 'grey'}}>Безкоштовні консультації та допомога протягом 3 місяців</p>
                  <ul className={style.list}>
                    <li>Допомога з гарантійними питаннями</li>
                    <li>Консультації з експлуатації</li>
                    <li>Рекомендації сервісів</li>
                  </ul>
                </div>
              </div>
              <div className={style.recommendation}>
                <p style={{margin: 0}}>
                  <b>Важливо: </b>За 8+ років роботи не було жодної судової суперечки. Усі питання вирішуються у досудовому порядку завдяки прозорості роботи та якісному сервісу.
                </p>
              </div>
            </div>
        </div>
        </div>
  )
}

export default Garantii
