import "./DropDownProperties.css";

const DropDownProperties = (props) => {
  const currentTemp = props.value[8];

  const dnd = props.value[24].Value;
  // tu vidjet dal se šta da smislit umjesto ovog hard codinga prije Value
  const deponed = props.value[38].Value;

  return (
    <div>
      <h3 className="basic-title">Properties:</h3>
      <div>{`Set temperature: ${props.temperature}`}</div>
      <div className="properties">{`Current temperature: ${currentTemp.Value}`}</div>
      <div className="properties">{dnd == 1 ? "DND" : ""}</div>
      <div className="properties">{deponed == 1 ? "Occupied" : ""}</div>
    </div>
  );
};

export default DropDownProperties;
