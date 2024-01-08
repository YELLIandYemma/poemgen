// my-poem-generator/src/App.js

import React, { useState } from 'react';
import './App.css';

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
    <div className="App">
      <h1>Random Poem Generator</h1>
      <button onClick={generatePoem}>Generate Poem</button>
      {randomPoem && <p>{randomPoem}</p>}
    </div>
  );
}

export default App;
