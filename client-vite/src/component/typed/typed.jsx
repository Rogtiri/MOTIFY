import { useEffect, useRef } from 'react'
import Typed from 'typed.js'


const Type = () => {

  const el = useRef(null)

  const icon = `<img src='/check.svg' style="width:20px; vertical-align:middle; margin-right:8px; fill: #eb6c36"/>`
  useEffect(() => {

    const typed = new Typed(el.current, {
      strings: [ `${icon} Більше 8 років в автоіндустрії^700<br/>` +
        `${icon}Більше 500 задоволених клієнтів^700<br/>` +
        `${icon}Перевірка історії і технічного стану^700<br/>` +
        `${icon}Допомога з оформленням документів`
        ],
      typeSpeed: 30,
      backSpeed: 0,
      showCursor: false,
      loop: false,
      contentType: 'html'
    })

    return () => {
      typed.destroy()
    }
  }, [])


  return (
    <div style={{lineHeight: 2}}>
      <span ref={el}></span>
    </div>
  )
}

export default Type
