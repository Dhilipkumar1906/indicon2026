import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import TopBar from "./components/TopBar.jsx"; 
import About from "./components/AboutSection.jsx"; // Capitalized 'About' for React standards
import Guidelines from "./Pages/Guidelines.jsx";
import Registration from "./Pages/Registrations.jsx";
import Committee from "./Pages/Committee.jsx";


function App() {
  
  // Premium Smooth Scroll (Lenis) Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Scroll speed. Innum slow aaganum na increase pannunga (e.g., 1.5)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Butter smooth curve
      smoothWheel: true,
      touchMultiplier: 2, // Mobile touch scroll speed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Page close aagumbothu memory clean aaga
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full"> {/* Overflow hide panna added wrapper */}
      <BrowserRouter>
        {/* NAVBAR */}
        <Navbar />

        {/* PAGES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TopBar" element={<TopBar />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} /> {/* Capitalized <About /> */}
          <Route path="/committee" element={<Committee />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;