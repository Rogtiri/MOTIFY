import React from 'react'
import {useInView} from 'react-intersection-observer'
import style from './AnimateForm.module.css'

const AnimateForm = ({children}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

  return (
    <div 
        ref={ref}
        className={`${style.showSection} ${inView ? style.visible : ''}`}
    >
      {children}
    </div>
  )
}

export default AnimateForm
