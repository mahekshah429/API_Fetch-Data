import React, { useState } from 'react';

const Apidatafetch = () => {
  const [apidata, setApidata] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setApidata(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6">
      <button
        onClick={fetchUsers}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md mb-6 transition duration-200"
      >
        Load All Users
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apidata.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-lg font-bold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Username:</span> {user.username}</p>
            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Street:</span> {user.address.street}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Company:</span> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apidatafetch;
