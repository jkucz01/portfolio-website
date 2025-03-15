import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
