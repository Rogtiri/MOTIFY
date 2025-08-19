
import './App.css';
import Header from './page/header/header';
import 'inter'
import Service from './page/main/service/service';
import Advatage from './page/main/advantage/advatage';
import Order from './page/main/custom/order';
import Footer from './page/footer/footer';
import Navigation from './component/navigation/nav';
import { FaArrowUpLong } from "react-icons/fa6";

function App() {
  return (
    <div className="App" >
      <a href='#header' className='scrollUp'><FaArrowUpLong /></a>
      <Navigation />
      <header id='header'>
        <Header/>
      </header>
      <main>
        <section id='service'>
          <Service />
        </section>
        <section id='advatage'>
          <Advatage />
        </section>
        <section id='order'>
          <Order />
        </section>
      </main>
      
      <footer>
          <Footer />
      </footer>
       
    </div>
  );
}

export default App;
