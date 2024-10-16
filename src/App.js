import './App.css';
import SideBar from './components/SideBar';
import MainDashboard from './components/UsersDashboard/MainDashboard';

function App() {
  return (
    <div className="px-1 font-Poppins flex">
      <SideBar/>
      <MainDashboard/>
      

    </div>
  );
}

export default App;
