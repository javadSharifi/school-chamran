import Home from 'pages/Home';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import cookie from 'server/cooke';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  cookie();
  return <Home />;
}

export default App;
