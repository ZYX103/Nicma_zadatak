import react, { useState } from "react";
import Settings from "./Settings";
import "./DropDown.css";
import DropDownData from "./DropDownData";
import DropDownProperties from "./DropDownProperties";
import QrCode from "./QrCode/QrCode";

const DropDown = (props) => {
  const [imgState, setImgState] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);

  const generateQrCode = () => {
    setImgState(true);
  };

  const getData = props.value;

  let temperature = JSON.parse(JSON.stringify(props.value.properties[7]));
  temperature.name = "Set temperature";

  const settingsID = getData.settings.map((i) => i.Id);
  const settingsName = getData.settings.map((i) => i.settingName);
  const settingsValue = getData.settings.map((i) => i.settingValue);

  const close = () => props.closeFunction("");

  const Toggle = () => {
    setToggleSettings(!toggleSettings);
  };

  let toggleFlex = toggleSettings ? "flex" : "none";

  return (
    <div>
      <div className="osnovni-podaci">
        <div className="basic-data-container">
          <button className="close-btn" onClick={close}>
            X
          </button>
          <DropDownData value={getData} />
        </div>
        <div>
          <div className="properties-container">
            <DropDownProperties
              value={props.value.properties}
              temperature={temperature.Value}
            />
          </div>
          <button className="settings-btn" onClick={Toggle}>
            Toggle settings
          </button>
          <button className="settings-btn" onClick={generateQrCode}>
            Generate QR code
          </button>
          {imgState && <QrCode value={props.value.name} />}
        </div>

        <div style={{ display: toggleFlex }}>
          <Settings
            value1={settingsID}
            value2={settingsName}
            value3={settingsValue}
          />
        </div>
      </div>
    </div>
  );
};

export default DropDown;

// <Settings
// value1={settingsID}
// value2={settingsName}
// value3={settingsValue}
// />

// <BrowserRouter>
// <Routes>
//   <Route
//     path="/Settings"
//     element={
// <Settings
//   value1={settingsID}
//   value2={settingsName}
//   value3={settingsValue}
// />
//     }
//   />
// </Routes>
// </BrowserRouter>
