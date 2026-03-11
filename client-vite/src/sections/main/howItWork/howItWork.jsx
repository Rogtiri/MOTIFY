import style from './howItWork.module.css'
import { FiPhone } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa6";
import FadeInSection from '../../../animation/AnimateShow';


const HowItWork = () => {
  return (
    <div className={style.howItWorkContainer}>
        <h2 className={style.title}>Як це <span style={{color: '#eb6c36'}}>працює?</span></h2>
        <p className={style.desc}>Все просто! Я допоможу вам на кожному етапі пошуку ідеального автомобіля</p>
    <div className={style.gridContainder}>
        {/* Заявка */}
      <FadeInSection delay={0}>
      <div className={style.block}>
        {/* Іконка */}
        <div className={style.icon}>
            <FiPhone size={23} strokeWidth={2}/>
        </div>
        {/* номер */}
        <div className={style.number}>1</div>
        {/* текст та опис */}
        <h3 className={style.titleBlock}>Заявка</h3>
        <p className={style.actionBlock}>Залишайте заявку з вашими вимогами до автомобілю</p>
        <p className={style.descBlock}>Вказуйте бюджет, побажання по марці, року випуску, пробігу</p>
      </div>
      </FadeInSection>
      <FadeInSection delay={0.3}>
        {/* Пошук */}
      <div className={style.block}>
        {/* Іконка */}
        <div className={style.icon}>
            <CiSearch size={23} strokeWidth={2}/>
        </div>
        {/* номер */}
        <div className={style.number}>2</div>
        {/* текст та опис */}
        <h3 className={style.titleBlock}>Пошук</h3>
        <p className={style.actionBlock}>Залишайте заявку з вашими вимогами до автомобілю</p>
        <p className={style.descBlock}>Вказуйте бюджет, побажання по марці, року випуску, пробігу</p>
      </div>
      </FadeInSection>
        {/* Перевірка */}
      <FadeInSection delay={0.6}>
      <div className={style.block}>
       {/* Іконка */}
        <div className={style.icon}>
            <BsCheck2Circle size={23} strokeWidth={1}/>
        </div>
        {/* номер */}
        <div className={style.number}>3</div>
        {/* текст та опис */}
        <h3 className={style.titleBlock}>Перевірка</h3>
        <p className={style.actionBlock}>Залишайте заявку з вашими вимогами до автомобілю</p>
        <p className={style.descBlock}>Вказуйте бюджет, побажання по марці, року випуску, пробігу</p>
      </div>
      </FadeInSection>
        {/* Сделка */}
      <FadeInSection delay={0.9}>
      <div className={style.block}>
        {/* Іконка */}
        <div className={style.icon}>
            <FaHandHoldingHeart size={23} strokeWidth={2}/>
        </div>
        {/* номер */}
        <div className={style.number}>4</div>
        {/* текст та опис */}
        <h3 className={style.titleBlock}>Сделка</h3>
        <p className={style.actionBlock}>Залишайте заявку з вашими вимогами до автомобілю</p>
        <p className={style.descBlock}>Вказуйте бюджет, побажання по марці, року випуску, пробігу</p>
      </div>
      </FadeInSection>
    </div>
    </div>
  )
}

export default HowItWork
