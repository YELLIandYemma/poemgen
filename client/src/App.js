import React, { useState } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import "./assests/style.sass";

function App() {
  const [randomPoem, setRandomPoem] = useState("");

  const generatePoem = async () => {
    try {
      const response = await fetch(
        "https://backend-7kvfq5vlb-yelliandyemma.vercel.app/api/generate-poem"
      );
      const data = await response.json();
      setRandomPoem(data.poem);
    } catch (error) {
      console.error("Error fetching random poem:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Poem generator</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <main className="centered-container">
        <div className="content">
          <h1 className="">Random Poem Generator</h1>
          <button className="button" onClick={generatePoem}>
            Generate Poem
          </button>
          {randomPoem && <p className="poem-text">{randomPoem}</p>}
        </div>
      </main>
    </>
  );
}

export default App;
