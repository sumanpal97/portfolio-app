import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
