import React from "react";

const DropDownData = (props) => {
  return (
    <div>
      <h3 className="basic-title">Basic data:</h3>
      <div>{`id: ${props.value.id}`}</div>
      <div>{`name: ${props.value.name}`}</div>
      <div>{`key: ${props.value.address}`}</div>
      <div>{`ipPort: ${props.value.ipPort}`}</div>
      <div>{`subZone: ${props.value.subZone}`}</div>
      <div>{`zone: ${props.value.zone}`}</div>
      <div>{`LocalCommandHeatingCooling: ${props.value.LocalCommandHeatingCooling}`}</div>
      <div>{`LocalCommandPanelBlocked: ${props.value.LocalCommandPanelBlocked}`}</div>
    </div>
  );
};

export default DropDownData;
