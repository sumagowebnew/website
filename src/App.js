import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Industries from './Components/Industries';
import { Route,Routes } from 'react-router-dom';
import Aboutuspage from './Components/Aboutuspage';

function App() {
  return (
    <>
    <div className="container-fluid App">
      <Header/>
      {/* <Aboutuspage/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutuspage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Industries" element={<Industries/>}/>
      </Routes>
     
      
    </div>
    </>
  );
}

export default App;
