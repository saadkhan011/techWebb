import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import ContactUs from './ContactUs';
import HashLoader from "react-spinners/HashLoader";
import Technologies from './Technologies';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { Route, Routes } from "react-router-dom"
function App() {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false)
    }, 4000);
  }, [])
  return (
    <>
      <div>
        {
          loading ?
            <div className='app'>
              <HashLoader
                color={"#621f86"}
                loading={loading}
                size={150}
              />
            </div>
            :
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/about" element={<About />}>
                </Route>
                <Route path="/services" element={<Services />}>
                </Route>
                <Route path="/technologies" element={<Technologies />}>
                </Route>
                <Route path="/ContactUs" element={<ContactUs />}>
                </Route>
                <Route path="/portfolio" element={<Portfolio />}>
                </Route>
              </Routes>
              <Footer />
            </div>
        }
      </div>
    </>
  );
}

export default App;