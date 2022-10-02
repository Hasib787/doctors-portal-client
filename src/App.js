import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";

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
          <Route
            path="appointment"
            element={
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
