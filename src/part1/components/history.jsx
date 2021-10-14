import React from "react";

// RENDERIZADO CONDICIONAL

export default function History({ allClicks }) {
  if (allClicks.length === 0) {
    return <h4>No hay nada que mostrar!</h4>;
  }
  return (
    <h4>
      The Button Has Been Pressed:{" "}
      <b>
        <i>{allClicks.length}</i>
      </b>
    </h4>
  );
}
