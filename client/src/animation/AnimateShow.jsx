import React from 'react'
import {useInView} from 'react-intersection-observer'
import style from './AnimateShow.module.css'

const FadeInSection = ({children, delay=0}) => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

  return (
    <div
        ref={ref}
        className={`${style.showSection} ${inView ? style.visible : ''}`}
        style={{transitionDelay: `${delay}s`}}
    >
      {children}
    </div>
  )
}

export default FadeInSection
