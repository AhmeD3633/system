import "./App.css";
import SigninComp from "./components/signingForms/SigninComp";
import SinginUser from "./components/signingForms/SigninUser";
import SignupComp from "./components/signingForms/SignupComp";
import MainDashboard from "./components/AdminDashboard/MainDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./components/Stats/Stats";
import Messages from "./components/Messages/Messages";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/demo.php")
      .then((response) => {
        setAdminData(response.data);
        console.log("response", response);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="font-Poppins">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupComp />} />
          <Route path="/" element={<SigninComp />} />
          <Route
            path="/mainDashboard"
            element={<MainDashboard adminData={adminData} />}
          />
          <Route path="/SigninUser" element={<SinginUser />} />
          <Route path="/stats" element={<Stats adminData={adminData} />} />
          <Route path="/message" element={<Messages adminData={adminData} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
