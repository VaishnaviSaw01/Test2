import { useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("Click the button to get a cat fact 🐱");

  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Failed to fetch cat fact 😿");
    }
  };

  return (
    <div className="container">
      <h1>🐱 Cat Fact Widget</h1>
      <p className="fact">{fact}</p>
      <button onClick={getCatFact}>Get New Fact</button>
    </div>
  );
}

export default App;
