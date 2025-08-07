import React from "react";
import Chatbot from "./components/Chatbot";
import PortfolioSections from "./components/PortfolioSections";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Portfolio</h1>
      <PortfolioSections />
      <Chatbot />
    </div>
  );
}

export default App;
