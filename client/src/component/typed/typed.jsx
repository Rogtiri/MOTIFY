import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import check from '../../assets/check.svg'

const Type = () => {

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ `<img src='${check}' style="width:20px; vertical-align:middle; margin-right:8px; fill: #eb6c36"/>Більше 8 років в автоіндустрії^700<br/>` +
        `<img src='${check}' style="width:20px; vertical-align:middle; margin-right:8px"/>Більше 500 задоволених клієнтів^700<br/>` +
        `<img src='${check}' style="width:20px; vertical-align:middle; margin-right:8px"/>Перевірка історії і технічного стану^700<br/>` +
        `<img src='${check}' style="width:20px; vertical-align:middle; margin-right:8px"/>Допомога з оформленням документів`
        ],
      typeSpeed: 50,
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
