import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import FlyderBot from "./pages/projects/FlyderBot";
import AquaticHousekeeper from "./pages/projects/AquaticHousekeeper";

function App() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <BrowserRouter>
        <Header />
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/flyderbot" element={<FlyderBot />} />
            <Route path="/projects/aquatic" element={<AquaticHousekeeper />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
