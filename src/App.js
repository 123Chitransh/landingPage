// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/service' element={<Service/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
