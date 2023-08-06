import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <div className="filler" />
    </div>
  );
};

export default App;
