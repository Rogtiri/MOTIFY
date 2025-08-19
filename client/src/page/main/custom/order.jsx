import React, { useState } from 'react'
import style from './order.module.css'
import FormContainer from '../../../component/orderComponent/formContainer';
import ContactInfo from '../../../component/orderComponent/contactInfo';
import AnimateForm from '../../../animation/AnimateOrder/AnimateForm';
import AnimateContact from '../../../animation/AnimateOrder/AnimateContact';

const Order = () => {

  return (
    <div className={style.orderContainer}>
      <div className={style.namedBlock}>
        <h2 style={{margin: 0, marginBottom: 20, fontSize: 36}}>Замовити <span style={{color: '#eb6c36'}}>підбір</span></h2>
        <span className={style.descOrder}>
            Розкажіть про свої вимоги, та я знайду для ідеальний автомобіль спеціально для вас
        </span>
      </div>
      {/* Обєднуючий блок для позиціонування */}
      <div className={style.positionContainer}>
        {/* Форма контейнер */}
        <AnimateForm>
          <FormContainer />
        </AnimateForm>
        {/* Контактна інформація */}
        <AnimateContact>
          <ContactInfo />
        </AnimateContact>
      </div>
    </div>
  )
}

export default Order


