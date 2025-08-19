import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuFileCheck } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { LuCreditCard } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import FadeInSection from '../../animation/AnimateShow';
import style from './advantageComponent.module.css'

const AdvantageComponent = () => {
  return (
      <div className={style.container}>
        {/* First */}
        <FadeInSection delay={0}>
        <div className={style.block}>
            {/* Icon */}
            <div className={style.icon}>
                <CiSearch size={23} strokeWidth={2}/>
            </div>
            {/* Named */}
            <h3 style={{marginBottom: 30, fontSize: 20}}>Ретельний відбір</h3>
            {/* Desc */}
            <p className={style.desc}>
                Перевіряю кожен автомобіль по 150+ параметрам, включаючи історію експлуатації 
                та технічний стан
            </p>
        </div>
        </FadeInSection>
        {/* Second */}
        <FadeInSection delay={0.3}>
        <div className={style.block}>
            {/* Icon */}
            <div className={style.icon}>
                <MdOutlineSecurity size={23}/>
            </div>
            {/* Named */}
            <h3 style={{marginBottom: 30, fontSize: 20}}>Повна безпека</h3>
            {/* Desc */}
            <p className={style.desc}>
                Перевірка на залог, обмеження, ДТП. Гарантую юридичну чистоту угоди
            </p>
        </div>
        </FadeInSection>
        {/* Third */}
        <FadeInSection delay={0.6}>
        <div className={style.block}>
            {/* Icon */}
            <div className={style.icon}>
                <LuFileCheck size={23}/>
            </div>
            {/* Named */}
            <h3 style={{marginBottom: 30, fontSize: 20}}>Економія часу</h3>
            {/* Desc */}
            <p className={style.desc}>
                Знайду ідеальний автомобіль за 2-7 днів. Вам не потрібно витрачати тижні на пошуки
            </p>
        </div>
        </FadeInSection>
        {/* Fourth */}
        <FadeInSection delay={0}>
        <div className={style.block}>
            {/* Icon */}
            <div className={style.icon}>
                <CiSettings size={23} strokeWidth={1.1}/>
            </div>
            {/* Named */}
            <h3 style={{marginBottom: 30, fontSize: 20}}>Експертна оцінка</h3>
            {/* Desc */}
            <p className={style.desc}>
                8 років досвіду в автомобільній сфері. Знаю всі підводні камені при покупці авто
            </p>
        </div>
        </FadeInSection>
        {/* Fiveth */}
        <FadeInSection delay={0.3}>
        <div className={style.block}>
            {/* Icon */}
            <div className={style.icon}>
                <LuCreditCard size={23}/>
            </div>
            {/* Named */}
            <h3 style={{marginBottom: 30, fontSize: 20}}>Індивідуальний підхід</h3>
            {/* Desc */}
            <p className={style.desc}>
                Враховую ваші потреби, бюджет та потреби. Кожен клієнт отримує персональне рішення
            </p>
        </div>
        </FadeInSection>
        {/* Six */}
        <FadeInSection delay={0.6}>
        <div className={style.block}>
            {/* Icon */}
            <div className={style.icon}>
                <FiPhone size={23}/>
            </div>
            {/* Named */}
            <h3 style={{marginBottom: 30, fontSize: 20}}>Допомога в оформлені</h3>
            {/* Desc */}
            <p className={style.desc}>
                Супроводжую угоду від А до Я. Допоможу з документами, переоформленням та страховкою
            </p>
        </div>
        </FadeInSection>



      </div>
  )
}

export default AdvantageComponent