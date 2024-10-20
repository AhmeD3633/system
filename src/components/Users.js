import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Users() {
  
  const [searchTerm, setSearchTerm] = useState('');

 
  const users = [
    {
      name: "John Doe",
      username: "johndoe123",
      gender: "Male",
      email: "john.doe@example.com"
    },
    {
      name: "Jane Smith",
      username: "janesmith456",
      gender: "Female",
      email: "jane.smith@example.com"
    },
    {
      name: "David Johnson",
      username: "davidjohnson789",
      gender: "Male",
      email: "david.johnson@example.com"
    },
    {
      name: "Emily Davis",
      username: "emilydavis321",
      gender: "Female",
      email: "emily.davis@example.com"
    },
    {
      name: "Michael Brown",
      username: "michaelbrown654",
      gender: "Male",
      email: "michael.brown@example.com"
    }
  ];

 let filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  const [data, setData] = useState([]);
 

  

  useEffect(() => {
    // Fetch data from PHP API
    const fetchData = async () => {
      try {
        const response = await axios.get('your-api-endpoint');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className=" w-full flex flex-col p-10 space-y-5">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"> <h1 className='leading-tight'>Helloo Namee <br /> <span className='text-[14px]'>have a nice day</span></h1></a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Name</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a className='text-[green]'>Settings</a></li>
                    <li><a className='text-[red]'>Logout</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

              </div>

            </div>

          </div>
        </div>
      </div>{/*navbar*/}
      <h1 className=' text-[#0088ff] mt-5 ms-8 text-[26px]  font-medium '>Users Dashboard</h1>
      <div className=" flex flex-col p-4">
        <div className="mb-6 flex justify-center ">
     
        <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full border-none bg-slate-100 shadow-md rounded-2xl text-primary focus:outline-none focus:shadow-md pl-10"
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      />
         
  
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className='ml-5 text-[18px] font-medium text-end'>Sort by</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a className='text-[green]'></a></li>
                  <li><a className='text-[red]'></a></li>
                </ul>
              </details>
            </li>
          </ul>

      

        </div>

        <div className='w-full justify-center items-center card border-[2px] border-[solid] border-[#0000002b] bg-white p-2'>
          <table className="table">
            <thead>

              <div><th className='text-[20px] p-5'>List Of Users</th></div>
              <tr className='bg-sky-50 p-5 text-[16px]  '>
                <th className='w-3/12'>Name</th>
                <th className='w-3/12'>Username</th>
                <th className='w-3/12'>Gender</th>
                <th className='w-3/12'>Email</th>
              </tr>
            </thead>
            <tbody>
            {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Users