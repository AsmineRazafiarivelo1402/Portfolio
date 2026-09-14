import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import PageWrapper from "./components/layout/PageWrapper";
import Background from "./components/effects/Background";
import CustomCursor from "./components/effects/CustomCursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/project"
          element={
            <PageWrapper>
              <Project />
            </PageWrapper>
          }
        />
        <Route
          path="/testimonials"
          element={
            <PageWrapper>
              <Testimonials />
            </PageWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Background />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-24">
        <AnimatedRoutes />
      </main>
    </Router>
  );
}

export default App;