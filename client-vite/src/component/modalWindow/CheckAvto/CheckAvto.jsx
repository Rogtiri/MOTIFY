import { MdCancel } from "react-icons/md";
import style from './CheckAvto.module.css'
import car from '../../../assets/car.svg'
import { CiWarning } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";


const CheckAvto = ({onClose}) => {
  return (
    <div className={style.modalContainer}>
			<div className={style.container}>
        <div className={style.titleContainer}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={car} alt="car" className={style.img}/>
            <h1 className={style.titleModal}>Як перевірити автомобіль</h1>
          </div>
          <span className={style.icons} onClick={() => onClose()}> <MdCancel  className={style.icons}/></span>
        </div>
        <div className={style.description}>
          {/* Перший блок */}
          <h3 className={style.title}>Перевірка документів</h3>
          <div className={style.descBlock}>
            <h4 style={{margin: 0, color: 'white'}}>Паспорт транспортного засобу(ПТС)</h4>
            <ul className={style.list}>
              <li>Перевірте справжність - водяні знаки, голограми</li>
              <li>Звірте VIN-номер у ПТС із номером на автомобілі</li>
              <li>Кількість власників (чим менше, тим краще)</li>
              <li>Позначки про заставу або обмеження</li>
            </ul>
            <h4 style={{margin: 0, color: 'white'}}>Онлайн Перевірка</h4>
            <ul className={style.list}>
              <li>Сайт ДАІ - історія реєстрацій, ДТП, розшук</li>
              <li>Реєстр застав – наявність кредитних зобов'язань</li>
              <li>ФССП – арешт судовими приставами</li>
              <li>Autocode, Autoteka – комплексна перевірка</li>
            </ul>
          </div>
          {/* другий блок */}
          <h3 className={style.title}>Технічна перевірка</h3>
          <div className={style.twoDescBlock}>
            <div className={style.descBlock}>
              <h4 style={{margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '5px'}}>
                <CiWarning size={25} color='#f97316'/>
                Зовнішній огляд
              </h4>
              <ul className={style.list}>
                <li>Сколи, подряпини, вм'ятини</li>
                <li>Відмінності у кольорі кузова</li>
                <li>Стан скла та фар</li>
                <li>Зношування шин (рівномірність)</li>
                <li>Корозія та осередки іржі</li>
              </ul>
            </div>
            <div className={style.descBlock}>
              <h4 style={{margin: 0, color: 'white', display: 'flex', alignItems: 'center', gap: '5px'}}>
                <img src={car} alt="car" style={{width: 25}}/>
                Двигун та системи
              </h4>
               <ul className={style.list}>
                <li>Запуск на холодну та прогріту ДВС</li>
                <li>Сторонні звуки та вібрації</li>
                <li>Колір вихлопу та олії</li>
                <li>Робота КПП та зчеплення</li>
                <li>Електричні системи</li>
              </ul>
            </div>
          </div>
          {/* третій блок */}
          <h3 className={style.title}>Тест-драйв</h3>
          <div className={style.descBlock}>
            <div className={style.modalInfoBlock}>
              <BsCheck2Circle size={23} color='#f97316'/>
              <div>
                <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Тест-драйв</h4>
                <p style={{margin: 0, color: 'grey', fontSize: 14}}>Перевірте роботу в пробках, на парковці, при маневруванні</p>
              </div>
            </div>
            <div className={style.modalInfoBlock}>
              <BsCheck2Circle size={23} color='#f97316'/>
              <div>
                <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Траса</h4>
                <p style={{margin: 0, color: 'grey', fontSize: 14}}>Розгін, гальмування, поведінка на високих швидкостях</p>
              </div>
            </div>
            <div className={style.modalInfoBlock}>
              <BsCheck2Circle size={23} color='#f97316'/>
              <div>
                <h4 style={{margin: 0, marginBottom: 5, color: 'white'}}>Електронника</h4>
                <p style={{margin: 0, color: 'grey', fontSize: 14}}>Усі системи: клімат, мультимедіа, помічники водія</p>
              </div>
            </div>
          </div>
          <div className={style.recommendation}>
            <p style={{margin: 0}}>
              <b>Рекомендація:</b> Не купуйте автомобіль без професійної діагностики. Витрати на перевірку можуть заощадити сотні тисяч рублів у майбутньому.
            </p>
          </div>
        </div>
		</div>
		</div>
  )
}

export default CheckAvto
