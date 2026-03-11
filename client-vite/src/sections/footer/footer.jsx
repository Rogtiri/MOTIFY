import style from './footer.module.css'
import FooterDesc from '../../component/footerComponent/footerDesc';
import FooterService from '../../component/footerComponent/footerService';
import FooterContact from '../../component/footerComponent/footerContact';
import FooterInfo from '../../component/footerComponent/footerInfo';

const Footer = ({openCheck, openDocument, openGaranti}) => {
  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <FooterDesc />
        <FooterService />
        <FooterContact />
        <FooterInfo openCheck={openCheck} openDocument={openDocument} openGaranti={openGaranti}/>
      </div>
      <div className={style.footerCopy}>
          <p style={{margin: 0}}>© 2023 AvtoPodbor. All rights reserved.</p>
          <div className={style.footerLinks}>
            <span className={style.link}>Політика конфіденціальності</span>
            <span className={style.link}>Угода користувача</span>
          </div>
      </div>
    </div>
  )
}

export default Footer
