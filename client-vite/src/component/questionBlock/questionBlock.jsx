import {useState} from 'react'
import style from './questionBlock.module.css'
import { IoIosArrowDown } from "react-icons/io";

const QuestionBlock = ({title, desc}) => {

    const [showAnswer, setShowAnswer] = useState(false)

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer)
    }

  return (
    <div className={style.questionBlock} onClick={() => handleShowAnswer()}>
        <div className={style.questionTitle}>
            <h3 className={style.title}>{title}</h3>
            <IoIosArrowDown className={`${style.arrow} ${showAnswer ? style.arrowRotate : ''}`}/>
        </div>
       <div className={style.answer}
       style={{
        maxHeight: showAnswer ? '1000px' : '0px',
        opacity: showAnswer ? 1 : 0,
      }}>
            <p className={style.desc}>{desc}</p>
       </div>
    </div>
  )
}

export default QuestionBlock
