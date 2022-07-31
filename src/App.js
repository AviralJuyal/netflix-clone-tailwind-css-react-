
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import  Home from './Components/Home';
import  About  from './Components/About';
import { Contact } from './Components/Contact';
import { PageNotFound } from './Components/PageNotFound';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
