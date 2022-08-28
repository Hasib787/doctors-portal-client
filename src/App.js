import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <div className="px-20">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
