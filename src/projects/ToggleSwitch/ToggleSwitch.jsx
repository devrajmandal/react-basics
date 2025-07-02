import { IoIosSwitch } from "react-icons/io";
import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggleClick = () => {
    setIsOn(!isOn);
  };
  const toggleBgColor = { background: isOn ? "#4caf50" : "" };
  const checkIsOn = isOn ? "on" : "off";
  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>
        Toggle switch <IoIosSwitch />
      </h1>
      <div
        className="toggle-switch"
        onClick={handleToggleClick}
        style={toggleBgColor}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};