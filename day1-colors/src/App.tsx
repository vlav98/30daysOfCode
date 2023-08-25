import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import { getContrastColor } from "./utils/getContrastRatio";
import { getRandomHexaColor } from "./utils/getRandomHexaColor";

const App: React.FC = () => {
  const [hexaColor, setHexaColorChanged] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");

  const changeHexaColor = () => {
    setHexaColorChanged(getRandomHexaColor());
    setTextColor(getContrastColor(hexaColor));
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(hexaColor);
  };

  const textColorStyle = {
    color: textColor,
  };

  const backgroundColor = {
    backgroundColor: hexaColor,
  };

  return (
    <div className="App" style={backgroundColor}>
      <div>
        <Button
          label="Click Me !"
          onClick={changeHexaColor}
          color={textColor}
        ></Button>
        <h2 style={textColorStyle} onClick={handleCopyClick}>
          {hexaColor}
        </h2>
      </div>
    </div>
  );
};

export default App;
