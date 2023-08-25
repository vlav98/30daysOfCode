import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
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
    document.getElementById("hexacolorCheck")!.classList.add("hide");
    document.getElementById("hexacolorText")!.classList.remove("animate-text");
    document.getElementById("hexacolorText")!.classList.remove("animate-text");
  };

  const handleCopyClick = () => {
    document.getElementById("hexacolorCheck")!.classList.remove("hide");
    navigator.clipboard.writeText(hexaColor);
    document.getElementById("hexacolorCheck")!.classList.add("animate-text");
    document.getElementById("hexacolorText")!.classList.add("animate-text");

    setTimeout(function () {
      document
        .getElementById("hexacolorText")!
        .classList.remove("animate-text");
      document
        .getElementById("hexacolorText")!
        .classList.remove("animate-text");
    }, 1000);
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

        <h2 id="hexacolorText" style={textColorStyle} onClick={handleCopyClick}>
          {hexaColor}
          <FontAwesomeIcon
            id="hexacolorCheck"
            className="hide"
            icon={faCheck}
          />
        </h2>
      </div>
    </div>
  );
};

export default App;
