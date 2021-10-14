import React, { useState } from "react";

const Hour = () => {
  const [counter, setCounter] = useState(0);
  // destructuring
  // obtenemos
  console.log(counter, setCounter);

  setTimeout(() => setCounter(counter + 1), 1000);
  return <div>{counter}</div>;
};

export default Hour;
