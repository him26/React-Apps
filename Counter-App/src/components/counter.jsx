import React, {useState} from "react";

function Counter ({id, value, onIncrement, onDecrement, onReset, onRemove}) {
    console.log(id);
    console.log(value);

    return <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
    <button onClick={() => onDecrement(id)}>-</button>
    <span style={{ margin: "0 10px" }}>{value}</span>
    <button onClick={() => onIncrement(id)}>+</button>
    <button onClick={() => onReset(id)} style={{ marginLeft: "10px" }}>Reset</button>
    <button  onClick={() => onRemove(id)} style={{ marginLeft: "10px", color: "red" }}> Remove</button>
  </div>
}

export default Counter