import React from 'react'
import style from './Component.module.css'
import { CiSearch } from "react-icons/ci";
import { FaHryvnia } from "react-icons/fa";
import FadeInSection from '../../animation/AnimateShow';

const Component = () => {
    
  return (
    <div className={style.container}>

        {/* First BLOCK */}
    <FadeInSection delay={0}>
      <div className={style.first}>
        {/* Icon */}
        <div className={style.icon}>
            <CiSearch size={23}/>
        </div>
        {/* Named */}
        <h3 style={{marginBottom: 30, fontSize: 20}}>Пошук автомобіля</h3>
        {/* Desc */}
        <p className={style.desc}>
            Знайду автомобіль по вашим критеріям серед ділерів
            та приватних продавців
        </p>
        {/* Price */}
        <span className={style.price}>от 3000 <FaHryvnia /></span>
        {/* List */}
        <ul className={style.list}>
            <li>Аналіз ринку</li>
            <li>Підбір варіантів</li>
            <li>Попередня перевірка</li>
            <li>Супровід огляду</li>
        </ul>
        {/* Button */}
        <button className={style.button}>Замовити послугу</button>
      </div>
      </FadeInSection>
        {/* Second BLOCK */}
       <FadeInSection delay={0.3}> 
      <div className={style.first}>
        {/* Icon */}
        <div className={style.icon}>
            <CiSearch size={23}/>
        </div>
        {/* Named */}
        <h3 style={{marginBottom: 30, fontSize: 20}}>Повна перевірка</h3>
        {/* Desc */}
        <p className={style.desc}>
            Комплексна перевірка історії, технічного стану та юридичної чистоти
        </p>
        {/* Price */}
        <span className={style.price}>от 3000 <FaHryvnia /></span>
        {/* List */}
        <ul className={style.list}>
            <li>Перевірка по VIN</li>
            <li>Історія ДТП</li>
            <li>Перевірка на залог</li>
            <li>Технічна діагностика</li>
        </ul>
        {/* Button */}
        <button className={style.button}>Замовити послугу</button>
      </div>
      </FadeInSection>
        {/* Third BLOCK */}
       <FadeInSection delay={0.5}> 
      <div className={style.first}>
        {/* Icon */}
        <div className={style.icon}>
            <CiSearch size={23}/>
        </div>
        {/* Named */}
        <h3 style={{marginBottom: 30, fontSize: 20}}>Супровід угоди</h3>
        {/* Desc */}
        <p className={style.desc}>
            Повне юридичне супроводження покупки від договору до реєстрації
        </p>
        {/* Price */}
        <span className={style.price}>от 3000 <FaHryvnia /></span>
        {/* List */}
        <ul className={style.list}>
            <li>Складання договору</li>
            <li>Перевірка документів</li>
            <li>Супровід в ГБДД</li>
            <li>Оформлення страховки</li>
        </ul>
        {/* Button */}
        <button className={style.button}>Замовити послугу</button>
      </div>
      </FadeInSection>
        {/* Fourth BLOCK */}
       <FadeInSection delay={0}>
      <div className={style.first}>
        {/* Icon */}
        <div className={style.icon}>
            <CiSearch size={23}/>
        </div>
        {/* Named */}
        <h3 style={{marginBottom: 30, fontSize: 20}}>Технічна експертиза</h3>
        {/* Desc */}
        <p className={style.desc}>
            Детальна діагностика технічного стану автомобіля
        </p>
        {/* Price */}
        <span className={style.price}>от 3000 <FaHryvnia /></span>
        {/* List */}
        <ul className={style.list}>
            <li>Діагностика двигуна</li>
            <li>Перевірка трансмісії</li>
            <li>Кузовні роботи</li>
            <li>Електронні системи</li>
        </ul>
        {/* Button */}
        <button className={style.button}>Замовити послугу</button>
      </div>
      </FadeInSection> 
        {/* Fiveth BLOCK */}
        <FadeInSection delay={0.3}>
        <div className={style.first}>
        {/* Icon */}
      <div className={style.icon}>
            <CiSearch size={23}/>
        </div>
        {/* Named */}
        <h3 style={{marginBottom: 30, fontSize: 20}}>Допомога з кредитом</h3>
        {/* Desc */}
        <p className={style.desc}>
            Підбір вигідних кредитних програм та допомога в оформлені автокредиту 
        </p>
        {/* Price */}
        <span className={style.price}>Безкоштовно</span>
        {/* List */}
        <ul className={style.list}>
            <li>Підбір банка</li>
            <li>Оформлення документів</li>
            <li>Отримання погоди</li>
            <li>Консультація</li>
        </ul>
        {/* Button */}
        <button className={style.button}>Замовити послугу</button>
      </div>
      </FadeInSection>
        {/* Sixth BLOCK */}
       <FadeInSection delay={0.5}>
      <div className={style.first}>
        {/* Icon */}
        <div className={style.icon}>
            <CiSearch size={23}/>
        </div>
        {/* Named */}
        <h3 style={{marginBottom: 30, fontSize: 20}}>Консультація</h3>
        {/* Desc */}
        <p className={style.desc}>
            Експертна консультація по вибору автомобіля та особливостей покупки
        </p>
        {/* Price */}
        <span className={style.price}>от 3000 <FaHryvnia /></span>
        {/* List */}
        <ul className={style.list}>
            <li>Вибір моделі</li>
            <li>Аналіз пропозицій</li>
            <li>Риночна оцінка</li>
            <li>Рекомендації</li>
        </ul>
        {/* Button */}
        <button className={style.button}>Замовити послугу</button>
      </div>
      </FadeInSection>
    </div>
  )
}

export default Component
