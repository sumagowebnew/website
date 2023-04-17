import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Industries from './Components/Industries';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <div className="container-fluid App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Industries" element={<Industries/>}/>
      </Routes>
     
      
    </div>
    </>
  );
}

export default App;
