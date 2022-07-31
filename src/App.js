
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './Components/Navbar';
import  Home from './Components/Home';
import { PageNotFound } from './Components/PageNotFound';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
