import React from 'react'
import style from './footer.module.css'
import FooterDesc from '../../component/footerComponent/footerDesc';
import FooterService from '../../component/footerComponent/footerService';
import FooterContact from '../../component/footerComponent/footerContact';
import FooterInfo from '../../component/footerComponent/footerInfo';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <FooterDesc />
        <FooterService />
        <FooterContact />
        <FooterInfo />
      </div>
      <div className={style.footerCopy}>
          <p style={{margin: 0}}>© 2023 AvtoPodbor. All rights reserved.</p>
          <div className={style.footerLinks}>
            <a className={style.link}>Політика конфіденціальності</a>
            <a className={style.link}>Угода користувача</a>
          </div>
        </div>
    </div>
  )
}

export default Footer
