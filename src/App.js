import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";
export default App;

function App() {
  let [colors, setColors] = useState([
    "violet",
    "blue",
    "lightblue",
    "green",
    "greenyellow",
    "yellow",
    "orange",
    "red",
  ]);
  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} />;
  });
  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div>
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}
