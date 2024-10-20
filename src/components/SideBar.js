import React, { useState } from "react";
import { Link} from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserIcon from "@mui/icons-material/Person";
import Logo from "../images/logo (1).png"

const SideBar = () => {
  const links = [
    { title: "Dashboard", path: "/dashboard", icon: DashboardIcon },
    { title: "Users", path: "/users", icon: UserIcon },
  ];

  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleActiveLink = (value) => {
    setActiveLink(value);
  };


  return (
    <div className="w-72 min-h-screen shadow-2xl rounded-3xl space-y-8">
      {/* LOGO HERE */}
      <div className="flex items-center justify-center w-full h-28">
        <img src={Logo} />
      </div>
      {/* Links here  */}
      
      <div className="w-full flex flex-col justify-center items-center text-xl font-medium">
        {links.map((link, index) => (
          <ul className="w-full flex items-center justify-start pl-12 ">
            <a>

            <Link 
            to={link.path} // This is where the navigation happens
            className="w-full flex items-center"
            onClick={() => handleActiveLink(link.title)}
          >
              <li key={index} className={`flex w-full items-center mb-4 cursor-pointer ${activeLink === link.title ? "text-blue-500" : "text-black"}`} onClick={() => handleActiveLink(link.title)}>
                <link.icon  
                  sx={{
                    fontSize: 30,
                    justifySelf: "flex-start",
                    marginRight: "10px",
                  }}
                />
                {link.title}
              </li>
              </Link>
            </a>
          </ul>
          
        ))}
      </div>
      
    </div>
    
  );
};

export default SideBar;
