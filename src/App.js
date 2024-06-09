import "./index.css";
import Block from "./components/Block";
import { useState } from "react";

function App() {
  let randomColor = () => {
    let newColor = Math.floor(Math.random() * 255);
    let newColorTwo = Math.floor(Math.random() * 255);
    let newColorThree = Math.floor(Math.random() * 255);

    return {
      colorOne: newColor,
      colorTwo: newColorTwo,
      colorThree: newColorThree,
    };
  };
  const [color, setColor] = useState(randomColor());

  let generateNewColor = () => {
    setColor(randomColor());
  };

  console.log(color);
  return (
    <div className="App">
      <h3>shades.</h3>
      <div className="blockContainer">
        <Block
          color={`rgba(${color.colorOne}, ${color.colorTwo}, ${color.colorThree}, 0.994)`}
        />
        <Block
          color={`rgba(${color.colorOne}, ${color.colorTwo}, ${color.colorThree}, 0.826)`}
        />
        <Block
          color={`rgba(${color.colorOne}, ${color.colorTwo}, ${color.colorThree}, 0.661)`}
        />
        <Block
          color={`rgba(${color.colorOne}, ${color.colorTwo}, ${color.colorThree}, 0.475)`}
        />
        <Block
          color={`rgba(${color.colorOne}, ${color.colorTwo}, ${color.colorThree}, 0.251)`}
        />
      </div>

      <div className="newColorButton">
        <h1 onClick={() => generateNewColor()}>+</h1>
      </div>
    </div>
  );
}

export default App;
