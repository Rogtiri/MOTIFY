import React from 'react'
import {useInView} from 'react-intersection-observer'
import style from './AnimateContact.module.css'

const AnimateContact = ({children}) => {
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

export default AnimateContact
