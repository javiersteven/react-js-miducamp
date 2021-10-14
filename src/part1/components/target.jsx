import React from "react";

// Como lo puedo hacer?
export default function Target(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        Total {props.right}
        <i>{props.right.value}</i>
      </p>
    </div>
  );
}
