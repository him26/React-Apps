import React,{useState, useEffect}  from "react";

function TimerCounter () {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    
    useEffect(() => {
        let timer;
        if (isRunning) {
          timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 1000);
        }
    
        return () => clearInterval(timer);
      }, [isRunning]);
    
      const startTimer = () => setIsRunning(true);
      const stopTimer = () => setIsRunning(false);
      const resetTimer = () => {
        setIsRunning(false);
        setCount(0);
      };

    return ( 
    <div style={{ padding: "20px" }}>
    <h1>Timer-Based Counter</h1>
    <h2>{count}</h2>
    <div style={{ marginTop: "10px" }}>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
    </div>
  
  )}

  export default TimerCounter;
