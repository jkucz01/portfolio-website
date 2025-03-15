import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <BrowserRouter>
        <Header />
        <main className="grow p-6">
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
