import Home from "pages/Home";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return <Home />;
}

export default App;
