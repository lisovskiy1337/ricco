import React, { useCallback, useState } from "react";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import GoTop from "./components/GoTop/GoTop";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Trusted from "./components/Trusted/Trusted";
import Works from "./components/Works/Works";

const App = () => {

  const [imgLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoaded = useCallback(() => {
      setImageLoaded(true);
  }, []);
  
  return (
    <div className="App">  
        <Hero imgLoaded={imgLoaded} handleImageLoaded={handleImageLoaded}/>
        <About imgLoaded={imgLoaded} handleImageLoaded={handleImageLoaded}/>
        <GoTop/>    
        <Skills/>
        <Works/>
        <Trusted/>
        <Comments/>
        <ContactUs/>
        <Footer/>
    </div>
    
  );
}

export default App;
