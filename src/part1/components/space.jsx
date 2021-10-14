import React, { useState } from "react";

import History from "./history.jsx";
import Button from "./button.jsx";
import Hello from "./hello.jsx";

import "./Styles/styleSpaceComponent.css";

export default function Space() {
  const [allClick, setAll] = useState([]);
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);

  // Esto sobra
  // const [clicks, setClick] = useState({ left: 0, right: 0 });

  // clicks = { left: 0, right: 0 }
  // setClick = ({ newObjectWithModifications })
  // setClick establece el nuevo valor de clicks

  // El cambio de estado del objeto debe darse
  // desde un nuevo objeto

  const handleLeftClick = () => {
    setAll(allClick.concat("L"));
    // setClick({ ...clicks, left: clicks.left + 1 });
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClick.concat("R"));
    // setClick({ ...clicks, right: clicks.right + 1 });
    setRight(right + 1);
  };
  const handleZeroClick = () => {
    setAll(allClick.concat("Re"));
    // setClick({ left: 0, right: 0 });
    setRight(0);
    setLeft(0);
  };

  const allClicksObject = {
    zero: allClick.filter((leter) => leter === "Re").length,
    right: allClick.filter((leter) => leter === "R").length,
    left: allClick.filter((leter) => leter === "L").length
  };
  return (
    <div>
      {/* REFACTORIZAR ALL WITH TABLES */}

      <h3>Current Clicks</h3>
      <p>
        Right : <i>{right}</i>
      </p>
      <p>
        Left : <i>{left}</i>
      </p>

      {/* REFACTORIZAR */}
      <h3>History Of All Clicks</h3>
      <p>
        Total Right : <i>{allClicksObject.right}</i>
      </p>
      <p>
        Total Left : <i>{allClicksObject.left}</i>
      </p>
      <p>
        Total Zero : <i>{allClicksObject.zero}</i>
      </p>

      <History allClicks={allClick} />
      <div>
        <Button text="Left" handleClick={handleLeftClick} />
        <Button text="right" handleClick={handleRightClick} />
        <Button text="zero" handleClick={handleZeroClick} />
      </div>
      <hr />
      <Hello />
    </div>
  );
}
