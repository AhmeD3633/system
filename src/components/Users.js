import React, { useState, useEffect } from 'react';
import axios from 'axios';


const containerStyles = 'container mx-auto px-4 py-8';
const cardStyles = 'bg-white shadow-md rounded-lg p-6';


function Users() {




  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

    <div className=" bg-gray-200 p-4 rounded-lg h-screen overflow-x-auto">
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
      <div className=" bg-gray-200 flex flex-col p-4">
        <div className="mb-6 flex justify-center ">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            placeholder="  Search users..."
            className="w-11/12 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* <div className="w-full max-w-lg bg-white rounded-lg shadow-md">
        <h2 className=" font-bold">Users</h2>
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <li key={user.id} className="py-2 border-b border-gray-200">
                {user.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No users found</li>
          )}
        </ul>
      </div> */}

        </div>

        <div className='w-full justify-center items-center card bg-white'>
          <table className="table">
            <thead>

              <div><th className='text-[20px] p-5'>List Of Users</th></div>
              <tr className='bg-sky-50 p-5'>
                <th className='w-3/12'>Name</th>
                <th className='w-3/12'>Username</th>
                <th className='w-3/12'>Gender</th>
                <th className='w-3/12'>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>name@gmail.com</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>name@gmail.com</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>name@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Users