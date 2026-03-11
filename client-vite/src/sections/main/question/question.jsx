import style from './question.module.css'
import { CiCircleQuestion } from "react-icons/ci";
import QuestionBlock from '../../../component/questionBlock/questionBlock';
import { FiPhone } from "react-icons/fi";
import FadeInSection from '../../../animation/AnimateShow';

const Question = () => {
  return (
    <div className={style.questionSectionContainer}>
        <h2 className={style.title}><CiCircleQuestion className={style.icon} strokeWidth={1.2}/> 
        Часті <span style={{color: '#eb6c36'}}>питання</span></h2>
        <p className={style.desc}>Відповіді на самі популярні питання</p>
        {/* Питання */}
        <FadeInSection>
        <div className={style.questionContainer}>
            <QuestionBlock 
                title={'Скільки коштують ваші послуги?'}
                desc={'Вартість послуг залежить від ваших вимог до автомобіля. Мінімальна вартість послуг 5000 грн. Детальніше про вартість послуг можна дізнатися на сторінці "Послуги" або зв\'язавшись зі мною будь-яким зручним для вас способом.'}
            />
            <QuestionBlock 
                title={'Скільки коштують ваші послуги?'}
                desc={'Вартість послуг залежить від ваших вимог до автомобіля. Мінімальна вартість послуг 5000 грн. Детальніше про вартість послуг можна дізнатися на сторінці "Послуги" або зв\'язавшись зі мною будь-яким зручним для вас способом.'}
            />
            <QuestionBlock 
                title={'Скільки коштують ваші послуги?'}
                desc={'Вартість послуг залежить від ваших вимог до автомобіля. Мінімальна вартість послуг 5000 грн. Детальніше про вартість послуг можна дізнатися на сторінці "Послуги" або зв\'язавшись зі мною будь-яким зручним для вас способом.'}
            />
            <QuestionBlock 
                title={'Скільки коштують ваші послуги?'}
                desc={'Вартість послуг залежить від ваших вимог до автомобіля. Мінімальна вартість послуг 5000 грн. Детальніше про вартість послуг можна дізнатися на сторінці "Послуги" або зв\'язавшись зі мною будь-яким зручним для вас способом.'}
            />
            <QuestionBlock 
                title={'Скільки коштують ваші послуги?'}
                desc={'Вартість послуг залежить від ваших вимог до автомобіля. Мінімальна вартість послуг 5000 грн. Детальніше про вартість послуг можна дізнатися на сторінці "Послуги" або зв\'язавшись зі мною будь-яким зручним для вас способом.'}
            />
            <QuestionBlock 
                title={'Скільки коштують ваші послуги?'}
                desc={'Вартість послуг залежить від ваших вимог до автомобіля. Мінімальна вартість послуг 5000 грн. Детальніше про вартість послуг можна дізнатися на сторінці "Послуги" або зв\'язавшись зі мною будь-яким зручним для вас способом.'}
            />
        </div>
        </FadeInSection>
        {/* Блок не знайшли питання */}
        <FadeInSection>
        <div className={style.anotherQuestion}>
            <h3 style={{fontSize: 24}}>Не знайшли відповідь на своє запитання?</h3>
            <span className={style.descComplex}>Звяжітся зі мною зручним для вас методом і я відповім на всі ваші запитання</span>
            <div className={style.priceComplex}>
                <button className={style.btnTel}><FiPhone />Позвонити</button>
                <button className={style.btnOrder} onClick={() => window.location.href = '#order'}>Залишати заявку</button>
            </div>
        </div>
        </FadeInSection>
    </div>
  )
}

export default Question
