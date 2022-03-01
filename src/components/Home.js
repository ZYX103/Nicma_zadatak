import { useState } from "react";
import React from "react";
import DropDown from "./DropDown";
import classes from "./Home.module.css";

const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTextClick = (index) => {
    setActiveIndex(index);
  };

  const closeModal = (enteredData) => {
    setActiveIndex(null);
  };

  const getZone = () =>
    props.value?.map((i, j) => {
      let hidden = j !== activeIndex ? "hidden" : "";

      return (
        <div key={i.id}>
          <div
            className={classes[props.secondaryclass]}
            onClick={() => onTextClick(j)}
          >
            <div>
              <strong>key: {i.zone}</strong>
            </div>
            <div>name: {i.name}</div>
            <div>address: {i.address}</div>
          </div>
          <div className={hidden}>
            <DropDown value={i} closeFunction={closeModal} />
          </div>
        </div>
      );
    });

  // const Podaci = props.value ? getZone() : "";

  return (
    <div>
      <div className={classes[props.mainclass]}>{getZone()}</div>
    </div>
  );
};

export default Home;

// {users.controllers ? getZone(users) : ""}
