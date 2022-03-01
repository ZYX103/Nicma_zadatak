// import React, { useState, useEffect } from "react";
import ".//Settings.css";

const Settings = (props) => {
  // const [users, setUsers] = useState([null]);

  // useEffect(() => {
  //   fetch("http://ae.hr/rooms_status.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data.controllers);
  //     });
  // }, []);

  // console.log(users);

  const vrijednostId = props.value1.map((i) => (
    <div className="value" key={Math.random()}>{`Id: ${i}`}</div>
  ));

  const vrijednostName = props.value2.map((i) => (
    <div className="value" key={Math.random()}>{`Settting Name: ${i}`}</div>
  ));
  const vrijednostValue = props.value3.map((i) => (
    <div className="value" key={Math.random()}>{`Settting Value: ${i}`}</div>
  ));

  return (
    <div className="settings-container">
      <div className="settings">{vrijednostId}</div>
      <div className="settings">{vrijednostName}</div>
      <div className="settings">{vrijednostValue}</div>
    </div>
  );
};

export default Settings;
