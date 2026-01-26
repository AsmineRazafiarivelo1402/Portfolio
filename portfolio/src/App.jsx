import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";

import Home from "./assets/pages/Home";
import Project from "./assets/pages/Project"
import Testimonials from "./assets/pages/Testimonials"
import Blog from "./assets/pages/Blog"
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen bg-[#1e1e1e] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
