import style from './header.module.css'
import Type from '../../component/typed/typed'
import photo from '../../assets/photoProfile.jpg'
import { FaArrowRight } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.context}>
        <div className={style.textContext}>
          <span className={style.expertBlock}>
            Експерт по автопідбору
          </span>
          <div className={style.nameBlock}>
            <span className={style.name}>Олег</span>
            <span className={style.name} style={{color: '#eb6c36 '}}>Чігінцев</span>
          </div>
          <span className={style.desc}>Професійний підбір авто з гарантією якості</span>
          <div className={style.autoText}>
            <Type />
          </div>
          <button className={style.buttonOrder}>Замовити підбір<FaArrowRight className={style.arrow}/></button>
        </div>
        <div className={style.photoConteiner}>
          <img src={photo} alt='profile' className={style.photo}></img>
        </div>
      </div>
        <LuMouse size={35} className={style.mouse}/>
    </div>
  )
}

export default Header
