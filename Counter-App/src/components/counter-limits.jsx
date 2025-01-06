import React, {useState}  from 'react'

function CounterWithLimits() {

    // State for the counter value, limits, and error messages
  const [count, setCount] = useState(0);
  const [maxLimit] = useState(10); // Maximum limit
  const [minLimit] = useState(0); // Minimum limit
  const [error, setError] = useState(""); // Error message

    // Increment the counter
        const increment = () => {
            if (count < maxLimit) {
            setCount(count + 1);
            setError(""); // Clear any previous error message
            } else {
            setError(`Maximum limit of ${maxLimit} reached!`);
            }
        };
    // Decrement the counter
    const decrement = () => {
        if (count > minLimit) {
        setCount(count - 1);
        setError(""); // Clear any previous error message
        } else {
        setError(`Minimum limit of ${minLimit} reached!`);
        }
    };
    // Reset the counter
    const reset = () => {
        setCount(0);
        setError(""); // Clear any previous error message
    };
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <h1>Counter with Limits</h1>
          <h2>{count}</h2>
    
          <div style={{ marginBottom: "10px" }}>
            <button
              onClick={decrement}
              disabled={count <= minLimit}
              style={{
                margin: "0 5px",
                backgroundColor: count <= minLimit ? "#ccc" : "#007BFF",
              }}
            >
              -
            </button>
            <button
              onClick={increment}
              disabled={count >= maxLimit}
              style={{
                margin: "0 5px",
                backgroundColor: count >= maxLimit ? "#ccc" : "#007BFF",
              }}
            >
              +
            </button>
            <button onClick={reset} style={{ margin: "0 5px", backgroundColor: "#f4a261" }}>
              Reset
            </button>
          </div>
    
          {error && <p style={{ color: "red" }}>{error}</p>}
    
          <div style={{ marginTop: "20px" }}>
            <p>Max Limit: {maxLimit}</p>
            <p>Min Limit: {minLimit}</p>
          </div>
        </div>
      );
}

export default CounterWithLimits;
