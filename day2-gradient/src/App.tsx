import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import { getContrastColor } from "./utils/getContrastRatio";
import { getRandomGradient } from "./utils/getRandomGradient";

function App() {
  const [linearGradient, setLinearGradient] = useState(
    "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
  );
  const [textColor, setTextColor] = useState("#000000");

  const changeBackground = () => {
    const newLinearGrandient = getRandomGradient();
    setLinearGradient(newLinearGrandient.linearGradientValue);
    const contrast1 = getContrastColor(newLinearGrandient.hex1);

    setTextColor(contrast1);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(linearGradient);
    document
      .getElementById("linearGradientText")!
      .classList.add("animate-text");

    setTimeout(function () {
      document
        .getElementById("linearGradientText")!
        .classList.remove("animate-text");
    }, 1000);
  };

  const backgroundGradient = {
    background: linearGradient,
  };

  return (
    <div className="App" style={backgroundGradient}>
      <div>
        <Button
          label="New gradient !"
          onClick={changeBackground}
          color={textColor}
        ></Button>
        <Button
          label="Copy linear gradient"
          onClick={() => {
            navigator.clipboard.writeText(linearGradient);
          }}
          color={textColor}
        ></Button>
        <Button
          label="Copy text color"
          onClick={() => {
            navigator.clipboard.writeText(textColor);
          }}
          color={textColor}
        ></Button>
        <h2
          id="linearGradientText"
          style={{ color: textColor }}
          onClick={handleCopyClick}
        >
          {linearGradient}
        </h2>
        <h3 style={{ color: textColor }}>Text Color : {textColor}</h3>
      </div>
    </div>
  );
}

export default App;
