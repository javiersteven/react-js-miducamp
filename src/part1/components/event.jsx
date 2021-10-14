import React, { useState } from "react";

// refactorizar en display y button
// button: props -> ( texto y handleClick )

/*
  SIMPLIFICAR TODO 
  INCLUYENDO LOS COMPONENTES
*/

const Display = ({ counter }) => <h1>{counter}</h1>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Event = () => {
  const [counter, setCounter] = useState(0);
  const toZero = () => setCounter(0);
  const toPlus = () => setCounter(counter + 1);
  const toMinus = () => setCounter(counter - 1);

  return (
    <div className={Styles.event}>
      <Display counter={counter} />
      <Button text="Minus" handleClick={toMinus} />
      <Button text="Plus" handleClick={toPlus} />
      <Button text="Zero" handleClick={toZero} />
    </div>
  );
};

export default Event;
