import React, { useState, useEffect, useContext } from "react";
import "./FetchData.css";
import { UserNameContext } from "../App";
import Home from "./Home";
import ProbniModal from "./Header_footer/ProbniModal";
import Backdrop from "./Header_footer/Backdrop";

const FetchData = (props) => {
  const [users, setUsers] = useState([null]);
  const { value, setValue } = useContext(UserNameContext);
  const [closeModal, setCloseModal] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    myAsyncFunc();
    // fetch("http://ae.hr/rooms_status.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //     setValue(data);
    //   });
  }, []);

  const myAsyncFunc = async () => {
    try {
      const userResponse = await fetch("http://ae.hr/rooms_status.json");
      const users = await userResponse.json();
      setUsers(users);
      setValue(users);
    } catch (err) {
      console.log("error");
    }
  };

  const user = users.controllers;

  const closeMe = () => {
    setOpenModal(false);
  };

  const openMe = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="outside-data">
        <Home
          value={user}
          mainclass="main-text-container"
          secondaryclass="main-text-2"
        />
      </div>
      <button onClick={openMe}>Show modal</button>
      <ProbniModal klasa={openModal} close={closeMe} />
      <Backdrop close={closeMe} klasa={openModal} />
    </div>
  );
};

export default FetchData;
