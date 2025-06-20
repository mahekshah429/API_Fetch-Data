import React from 'react';
import Apifetch from './Apidatafetch';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-700 py-6">📋 User List</h1>
      <Apifetch />
    </div>
  );
};

export default App;
