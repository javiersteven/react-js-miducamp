import React, { useState } from "react";
import Button from "./button.jsx";

import "./Styles/styleSpaceComponent.css";

const Display = ({ counter }) => {
  return <h3>Counter: {counter}</h3>;
};

export default function Hello() {
  const [value, setValue] = useState(0);

  // Funcion que devuelve una funcion
  const setToValue = (newValue) => {
    setValue(newValue);
  };

  // onClick={FUNCION si o si}
  return (
    <div>
      <Button text="Zero" handleClick={() => setToValue(0)} />
      <Button text="Increment" handleClick={() => setToValue(value + 1)} />
      <Button text="Minus" handleClick={() => setToValue(value - 1)} />
      <Button text="Hundred" handleClick={() => setToValue(value + 100)} />
      <Display counter={value} />
    </div>
  );
}
