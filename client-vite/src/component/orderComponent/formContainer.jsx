import {useState, useEffect, useRef} from 'react'
import style from './formContainer.module.css'
import { LuSend } from "react-icons/lu";
import { RxCaretDown } from "react-icons/rx";
import { BsBoxSeamFill } from "react-icons/bs";

const FormContainer = ({callback, orderType, serviceName}) => {

  const [formInfo, setFormInfo] = useState({
    name: '',
    phone: '',
    email: '',
    wish: ''
  })


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


  const handleChange = (e) => {
    const {id, value} = e.target
    setFormInfo(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const sendForm = {...formInfo, price: selectedPrice, typeCar: selectedType, serviceType: serviceName}
    try {
      const sendOrder = await fetch('/tg/newOrder', {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(sendForm)
      })
      const resultSending = await sendOrder.json()
      if(!sendOrder.ok){
        throw resultSending
      }

      console.log('Succses')
    } catch (error) {
      console.log(error)
    }
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
        <form onSubmit={handleSubmit}>
          {orderType && 
            <div className={style.choosenService}>
              <BsBoxSeamFill />
              <span>{serviceName}</span>
            </div>
          } 
        {/* Поля імя та телефон */}
        <div className={style.namePhoneContainer}>
            <div>
            <label htmlFor='name'>Ваше імя</label>
            <input id='name' placeholder='Введіть ваше імя' className={style.inputPole}
            onChange={handleChange} value={formInfo.name}
            ></input>
            </div>
            <div>
            <label htmlFor='phone'>Телефон</label>
            <input id='phone'  type="tel" placeholder='' className={style.inputPole}
            onChange={handleChange} value={formInfo.phone}
            ></input>
            </div>
        </div>
        {/* Поле емайл */}
        <div>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" placeholder='your@email.com'  className={style.inputPoleEmail} style={{width: '100%'}}
            onChange={handleChange} value={formInfo.email}
            ></input>
        </div>
        {/* Поля вибору бюджету та типу автомобіля */}
        <div className={style.namePhoneContainer}>
            {/* Вибір ціни */}
            <div className={style.selectContainer} ref={dropdownRef}>
              <label htmlFor='price'>Бюджет</label>
              <button id='price' type="button" className={style.selectPole} onClick={(e) => showMenu(e)}>
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
              <button id='typeCar' type="button" className={style.selectPole} onClick={(e) => showTypeMenu(e)}>
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
            <textarea id='wish' placeholder='Ваші вимоги до автомобіля' className={style.descPole}
            onChange={handleChange} value={formInfo.wish}
            ></textarea>
        </div>
        <button className={style.btn} onClick={callback}><LuSend /> Відправити замовлення</button>
        </form>
    </div>
  )
}

export default FormContainer
