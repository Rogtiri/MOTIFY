import car from '../../../assets/car.svg'
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import style from './DocumentForBuy.module.css'

const DocumentForBuy = ({onClose}) => {
  return (
    <div className={style.modalContainer}>
          <div className={style.container}>
            <div className={style.titleContainer}>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <img src={car} alt="car" className={style.img}/>
                <h1 className={style.titleModal}>Документи для покупки авто</h1>
              </div>
              <span className={style.icons} onClick={() => onClose()}> <MdCancel  className={style.icons}/></span>
            </div>
            <div className={style.description}>
              {/* перший блок */}
              <h3 className={style.title}>Документи покупця</h3>
              <div className={style.twoDescBlock}>
                <div className={style.descBlock}>
                  <h4 style={{margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <RiContactsLine size={25} color='#f97316'/>
                    Фізична особа
                  </h4>
                  <ul className={style.list}>
                    <li>Паспорт громадянина</li>
                    <li>Посвідчення водія</li>
                    <li>РНОКПП (для деяких операцій)</li>
                    <li>Готівка або довідка про доходи для кредиту</li>
                  </ul>
                </div>
                <div className={style.descBlock}>
                  <h4 style={{margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <IoDocumentTextOutline size={25} color='#f97316'/>
                    Юридична особа
                  </h4>
                   <ul className={style.list}>
                    <li>Свідоцтво про реєстрацію ЮО</li>
                    <li>ЄДРПОУ, ІПН, КПП</li>
                    <li>Паспорт керівника чи довіреність</li>
                    <li>Друк організації</li>
                  </ul>
                </div>
              </div>
              {/* другий блок */}
              <h3 className={style.title}>Документи на автомобіль</h3>
              <div className={style.descBlock}>
                <div className={style.positionList}>
                  {/* Блоки розділення для позіціонування двох списків */}
                  {/* перший */}
                  <div>
                    <h4 style={{margin: 0, color: '#f97316'}}>
                      Від продавця
                    </h4>
                    <ul className={style.list}>
                      <li>Паспорт громадянина</li>
                      <li>Посвідчення водія</li>  
                      <li>РНОКПП (для деяких операцій)</li>
                      <li>Готівка або довідка про доходи для кредиту</li>
                    </ul>
                  </div>
                  {/* другий */}
                  <div>
                    <h4 style={{margin: 0, color: '#f97316'}}>
                      Додатково
                    </h4>
                    <ul className={style.list}>
                      <li>Паспорт громадянина</li>
                      <li>Посвідчення водія</li>
                      <li>РНОКПП (для деяких операцій)</li>
                      <li>Готівка або довідка про доходи для кредиту</li>
                    </ul>
                  </div>
                </div>
                 
              </div>
              {/* третій блок */}
              <h3 className={style.title}>Тест-драйв</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: 15}}>
                <div className={style.descBlock}>
                  <div className={style.modalInfoBlock}>
                    <div className={style.numberBlock}>
                      1
                    </div>
                    <div>
                      <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Перевірка документів</h4>
                      <p style={{margin: 0, color: 'grey', fontSize: 14}}>Звіряємо всі дані, VIN-номер, номери агрегатів</p>
                    </div>
                  </div>
                </div>
                <div className={style.descBlock}>
                  <div className={style.modalInfoBlock}>
                    <div className={style.numberBlock}>
                      2
                    </div>
                    <div>
                      <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Зіставлення договору</h4>
                      <p style={{margin: 0, color: 'grey', fontSize: 14}}>Заповнюємо договір купівлі-продажу у 3 примірниках</p>
                    </div>
                  </div>
                </div>
                <div className={style.descBlock}>
                  <div className={style.modalInfoBlock}>
                    <div className={style.numberBlock}>
                      3
                    </div>
                    <div>
                      <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Передача грошей</h4>
                      <p style={{margin: 0, color: 'grey', fontSize: 14}}>Безпечна передача коштів через банківський осередок</p>
                    </div>
                  </div>
                </div>
                <div className={style.descBlock}>
                  <div className={style.modalInfoBlock}>
                    <div className={style.numberBlock}>
                      4
                    </div>
                    <div>
                      <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Передача автомобіля</h4>
                      <p style={{margin: 0, color: 'grey', fontSize: 14}}>Підписання акта приймання-передачі, отримання ключів</p>
                    </div>
                  </div>
                </div>
                <div className={style.descBlock}>
                  <div className={style.modalInfoBlock}>
                    <div className={style.numberBlock}>
                      5
                    </div>
                    <div>
                      <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Реєстрація в ДАІ</h4>
                      <p style={{margin: 0, color: 'grey', fontSize: 14}}>Постановка на облік протягом 10 днів</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DocumentForBuy
