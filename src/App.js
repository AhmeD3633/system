
import "./App.css";
import SigninComp from "./components/signingForms/SigninComp";
import SinginUser from "./components/signingForms/SigninUser";
import SignupComp from "./components/signingForms/SignupComp";
import Users from './components/Users';
import MainDashboard from "./components/UsersDashboard/MainDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-Poppins">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/" element={<SigninComp />} />
          <Route path="/mainDashboard" element={<MainDashboard />} />
          <Route path="/SigninUser" element={<SinginUser />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
