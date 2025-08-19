import React from 'react'
import style from './service.module.css'
import Component from '../../../component/serviceComp/Component'
import { FaHryvnia } from "react-icons/fa";
import FadeInSection from '../../../animation/AnimateShow';

const Service = () => {
  return (
    <div className={style.serviceContainer}>
      <div className={style.namedBlock}>
        <h2 style={{margin: 0, fontSize: 36}}>Мої <span style={{color: '#eb6c36'}}>послуги</span></h2>
        <span className={style.descServ}>Повний спектр послуг для безпечної покупки автомобіля - від пошуку до реєстрації</span>
      </div>
      <div style={{marginBottom: 50}}>
        <Component/>
      </div>
      <FadeInSection>
      <div className={style.complexContainer}>
        <h3 style={{fontSize: 24}}>Комплексний пакет послуг</h3>
        <span className={style.descComplex}>Замовляйте повний пакет послуг (пошук + перевірка + супровід) і отримайте знижку 15%</span>
        <div className={style.priceComplex}>
          <span className={style.fullPrice}>10 000 <FaHryvnia /></span>
          <span className={style.smallPrice}>8 000 <FaHryvnia /></span>
        </div>
        <button className={style.btn}>Замовляйте комплекс</button>
      </div>
      </FadeInSection>
    </div>
  )
}

export default Service
