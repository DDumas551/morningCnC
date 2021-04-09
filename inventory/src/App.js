import "./App.css";
import React, { useState } from "react";
import AddInventory from "./AddInventory";
import Display from "./Display";
import Title from "./Title";

function App() {
  const [data, setData] = useState({ Carrots: 1, Potatoes: 50 });
  return (
    <div className="page">
      <Title />
      <div className="App">
        <AddInventory setData={setData} />
        <Display data={data} />
      </div>
    </div>
  );
}

export default App;
