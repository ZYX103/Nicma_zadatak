import React, { useEffect, useState } from "react";
import FetchData from "./components/FetchData";
import "./App.css";
import Header from "./components/Header_footer/Header";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Header_footer/Sidebar";

export const UserNameContext = React.createContext();

const App = () => {
  const [value, setValue] = useState();
  const probaZaGit = "proba";

  return (
    <UserNameContext.Provider value={{ value, setValue }}>
      <Header></Header>
      <div className="main-container">
        <Sidebar />
        <FetchData></FetchData>
      </div>
    </UserNameContext.Provider>
  );
};

export default App;
