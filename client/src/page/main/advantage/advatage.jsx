import React from 'react'
import style from './advantage.module.css'
import AdvantageComponent from '../../../component/advantageComponent/advantageComponent'

const Advatage = () => {
  return (
    <div className={style.advantageContainer}>
      <div className={style.namedBlock}>
        <h2 style={{margin: 0, marginBottom: 20, fontSize: 36}}>Чому обирають <span style={{color: '#eb6c36'}}>мене</span></h2>
        <span className={style.descAdv}>Професійний підхід до кожного клієнта та досвід роботи на ринку автомобілів</span>
      </div>
      <AdvantageComponent />
    </div>
  )
}

export default Advatage
