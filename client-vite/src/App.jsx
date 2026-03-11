import { useState, useEffect } from 'react';
import './App.css';
import Header from './sections/header/header';
import 'inter'
import Service from './sections/main/service/service';
import Advatage from './sections/main/advantage/advatage';
import HowItWork from './sections/main/howItWork/howItWork';
import Order from './sections/main/custom/order';
import Footer from './sections/footer/footer';
import Navigation from './component/navigation/nav';
import Question from './sections/main/question/question';
import { FaArrowUpLong } from "react-icons/fa6";
import CheckAvto from './component/modalWindow/CheckAvto/CheckAvto';
import Garantii from './component/modalWindow/Garantii/Garantii';
import DocumentForBuy from './component/modalWindow/DocumentForBuy/DocumentForBuy';
import CallbackToClient from './component/modalWindow/CallbackToClient/callbackToClient';





function App() {

  const [modalActive, setModalActive] = useState(null);

  const [orderType, setOrderType] = useState(null)

  const [serviceName, setServiceName] = useState(null)
  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalActive])



  return (
    <div className="App" >

    {modalActive === 'CheckAvto' && <CheckAvto onClose={() => setModalActive(null)} />}
    {modalActive === 'DocumentForBuy' && <DocumentForBuy onClose={() => setModalActive(null)} />}
    {modalActive === 'Garanti' && <Garantii onClose={() => setModalActive(null)} />}
    {modalActive === 'CallBack' && <CallbackToClient onClose={() => setModalActive(null)} />}

      {/* <a href='#header' className='scrollUp'><FaArrowUpLong /></a> */}
      <Navigation />
      <header id='header'>
        <Header/>
      </header>
      <main>
        <section id='service'>
          <Service setOrderType={setOrderType} setServiceName={setServiceName}/>
        </section>
        <section id='advatage'>
          <Advatage />
        </section>
        <section id='howItWork'>
          <HowItWork />
        </section>
        <section id='order'>
          <Order callback={() => (setModalActive('CallBack'))} orderType={orderType} serviceName={serviceName}/>
        </section>
        <section id='question'>
          <Question />
        </section>
      </main>
      
      <footer>
          <Footer openCheck={() => (setModalActive('CheckAvto'))}
                  openDocument={() => (setModalActive('DocumentForBuy'))}
                  openGaranti={() => (setModalActive('Garanti'))}
          />
      </footer>
       
    </div>
  );
}

export default App;
