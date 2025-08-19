import React, {useState, useEffect, useRef} from 'react'
import style from './formContainer.module.css'
import { LuSend } from "react-icons/lu";
import { RxCaretDown } from "react-icons/rx";

const FormContainer = () => {

  const [show, setShow] = useState(false)
  const [showType, setShowType] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const dropdownRef = useRef(null);
  const dropdownTypeRef = useRef(null);
  
  const showMenu = (e) => {
    e.preventDefault()
    setShow(prev => !prev)
    setShowType(false)
  }

  const showTypeMenu = (e) => {
    e.preventDefault()
    setShowType(prev => !prev)
    setShow(false)
  }

  const handlePriceSelect = (value) => {
    setSelectedPrice(value)
    setShow(false)
  }
  const handleTypeSelect = (value) => {
    setSelectedType(value)
    setShowType(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false)
      }
      if (dropdownTypeRef.current && !dropdownTypeRef.current.contains(event.target)) {
      setShowType(false);
    }
    };

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const price =[
    'до 1000$',
    'від 1000$ до 5000$',
    'від 5000$ до 10000$',
    'від 10000$'
  ]

  const typeCar = [
    'Легковий',
    'Позашляховик',
    'Мікроавтобус',
    'Вантажний'
  ]


  return (
    <div className={style.formContainer}>
        <h3 style={{marginTop: 0, marginBottom: 35, fontSize: 24}}>Залишити замовлення</h3>
        <form>
        {/* Поля імя та телефон */}
        <div className={style.namePhoneContainer}>
            <div>
            <label htmlFor='name'>Ваше імя</label>
            <input id='name' placeholder='Введіть ваше імя' className={style.inputPole}></input>
            </div>
            <div>
            <label htmlFor='phone'>Телефон</label>
            <input id='phone' placeholder='' className={style.inputPole}></input>
            </div>
        </div>
        {/* Поле емайл */}
        <div>
            <label htmlFor='email'>Email</label>
            <input id='email' placeholder='your@email.com'  className={style.inputPoleEmail} style={{width: '100%'}}></input>
        </div>
        {/* Поля вибору бюджету та типу автомобіля */}
        <div className={style.namePhoneContainer}>
            {/* Вибір ціни */}
            <div className={style.selectContainer} ref={dropdownRef}>
              <label htmlFor='price'>Бюджет</label>
              <button id='price' className={style.selectPole} onClick={(e) => showMenu(e)}>
                  {selectedPrice || 'Ваш бюджет'}<RxCaretDown size={15}/>
              </button>
              <div className={`${style.optionContainer} ${show ? style.open : ''}`}>
                {price.map((opt, index) => (
                <div 
                  key={index}
                  className={style.option}
                  onClick={() => handlePriceSelect(opt)}>{opt}
                </div>))}
              </div>
            </div>
            {/* Тип машини */}
            <div className={style.selectContainer} ref={dropdownTypeRef}>
              <label htmlFor='typeCar'>Тип автомобіля</label>
              <button id='typeCar' className={style.selectPole} onClick={(e) => showTypeMenu(e)}>
                  {selectedType || 'Тип автомобіля'}<RxCaretDown size={15}/>
              </button>
              <div className={`${style.optionContainer} ${showType ? style.open : ''}`}>
                {typeCar.map((type) => (
                  <div 
                    key={type}
                    className={style.option}
                    onClick={() => handleTypeSelect(type)}>{type}
                  </div>
                ))}
              </div>
            </div>
        </div>
        {/* Поле з додатковими побажаннями */}
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label>Додаткові побажання</label>
            <textarea placeholder='Ваші вимоги до автомобіля' className={style.descPole}></textarea>
        </div>
        <button className={style.btn}><LuSend /> Відправити замовлення</button>
        </form>
    </div>
  )
}

export default FormContainer
