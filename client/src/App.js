// my-poem-generator/src/App.js

import React, { useState } from 'react';
import './App.css';
import {Helmet} from "react-helmet";


function App() {
  const [randomPoem, setRandomPoem] = useState('');

  const generatePoem = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/generate-poem');
      const data = await response.json();
      setRandomPoem(data.poem);
    } catch (error) {
      console.error('Error fetching random poem:', error);
    }
  };

  return (
    <>
     <Helmet>
        <title>Poem generator</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <main className='grid place-items-center h-screen'>
    <div className="p-6 bg-gray-100 rounded-md mb-6">
      <h1 className='text-xl font-semibold text-gray-800 mb-4'>Random Poem Generator</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700' onClick={generatePoem}>Generate Poem</button>
      {randomPoem && <p className='italic text-gray-600'>{randomPoem}</p>}
    </div>
    </main>
    </>
  );
}

export default App;
