import './App.css';
import SideBar from './components/SideBar';
import MainDashboard from './components/UsersDashboard/MainDashboard';
import Users from './components/Users';
import {BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="px-1 font-Poppins flex h-screen">
      <BrowserRouter>   
        <SideBar />
          <Routes>
            <Route path="/dashboard" element={<MainDashboard/>} />
            <Route path="/users" element={<Users />} />
          </Routes>
    </BrowserRouter>

    
      

    </div>
  );
}

export default App;
