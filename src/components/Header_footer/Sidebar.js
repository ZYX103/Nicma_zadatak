import react, { useContext } from "react";
import { UserNameContext } from "../../App";
import Home from "../Home";
import "./Sidebar.css";
import CalcDate from "./CalcDate";

const Sidebar = (props) => {
  const { value, setValue } = useContext(UserNameContext);
  const objectData = value?.controllers;

  return (
    <div className="sidebar-container">
      <Home value={objectData} mainclass="sidebar" secondaryclass="sidebar2" />
      <CalcDate />
    </div>
  );
};

export default Sidebar;
