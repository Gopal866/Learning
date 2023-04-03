import React, { createContext, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {UseStateCompo} from "./HooksComponents/UseStateCompo";
import UseCallback from "./HooksComponents/UseCallback";

function App() {
  const [data, setData] = useState("Initial Data")
  const updateStateFunc = () => {
    setData("Update the state using react hooks")
  }

  // createContext
  const [contextData, setContextData] = useState("useContext Data from App.js file")
  return (
    <div className="App">
    {/* createContext */}
      <UserContext.Provider value={contextData}>
      <UseStateCompo data={data} updateStateFunc={updateStateFunc}/>
      </UserContext.Provider>
      <UseCallback />
    </div>
  );
}
  // createContext
export const UserContext = createContext();
export default App;
