import axios from "axios";
import React from "react";
import { useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
  };
  return (
    <div className=" flex justify-center space-x-6 p-4">
      <div className="text-fuchsia-700 font-bold text-2xl ">Users</div>
      <div>
        <button
          className="bg-slate-600 p-2 rounded-md text-white font-semibold"
          onClick={fetchUsers}
        >
          Get User Details
        </button>

        {data.map((user) => (
          <div className="p-4" key={user.id}>
            <p style={{color:"red"}}>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
