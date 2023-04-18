import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Industries from './Components/Industries';
import { Route, Routes } from 'react-router-dom';
import Aboutuspage from './Components/Aboutuspage';
import './App.css';
import Footer from './Components/Footer';
import './Components/Footer.css';
import Life from './Components/Life/Life';
import Service from './Components/Service';


function App() {
  return (
    <>
      <div className="container-fluid App">
        <Header />
        {/* <Aboutuspage/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutuspage" element={<Aboutuspage/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Life" element={<Life />} />


        </Routes>
        <Footer />

      </div>
    </>
  );
}

export default App;
