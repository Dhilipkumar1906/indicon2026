import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import TopBar from "./components/TopBar.jsx"; 
import about from "./components/AboutSection.jsx"

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <Navbar />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TopBar" element={<TopBar/>}/>
        <Route path="/about" element={<about/>}/>
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
