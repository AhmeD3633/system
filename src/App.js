import "./App.css";
import SigninComp from "./components/signingForms/SigninComp";
import SinginUser from "./components/signingForms/SigninUser";
import SignupComp from "./components/signingForms/SignupComp";
import MainDashboard from "./components/AdminDashboard/MainDashboard";
import Stats from "./components/Stats/Stats";
import Messages from "./components/Messages/Messages";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Tickets from "./Tickets/Tickets";

function App() {
  const [adminData, setAdminData] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost/MyPHPWebsite/api/read.php")
      .then((response) => {
        setAdminData(response.data);
        setUserCount(response.data.length);
        const [tickets, setTickets] = useState([]);
    
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

        useEffect(() => {
          axios
            .get("http://localhost/get-tickets.php")
            .then((response) => {
              setTickets(response.data);
            })
            .catch((error) => {
              console.error("Error fetching tickets:", error);
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
                  element={
                    <MainDashboard
                      adminData={adminData}
                      setAdminData={setAdminData}
                    />
                  }
                />
                <Route path="/SigninUser" element={<SinginUser />} />
                <Route
                  path="/stats"
                  element={<Stats userCount={userCount} adminData={adminData} />}
                />
                <Route path="/message" element={<Messages adminData={adminData} />} />
                <Route
                  path="/tickets"
                  element={<Tickets tickets={tickets} adminData={adminData} />}
                />
              </Routes>
            </Router>
          </div>
        );
      }
    }
}
export default App;
