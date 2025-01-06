import React, {useState} from "react";

function MultiCounterApp () {

    const [counters, setCounter] = useState([])

    const addCounter = () => {
        setCounter([...counters, {id: Date.now(), value: 0} ])
    }

    const updateCounter = (id,delta) => {
        setCounter(
            counters.map((counter) => {
                counter.id === id ? { ...counter, value: counter.value + delta } : counter 
            })
        )
    }

    const resetCounter = (id) => {
        setCounter(
          counters.map((counter) =>
            counter.id === id ? { ...counter, value: 0 } : counter
          )
        );
      };
    
      const removeCounter = (id) => {
        setCounter(counters.filter((counter) => counter.id !== id));
      };
    const totalCount = counters.reduce((sum, counter) => sum + counter.value, 0);

    return (
        <div style={{ padding: "20px" }}>
        <h1>Multi-Counter App</h1>
        <button onClick={addCounter}>Add Counter</button>
        <div style={{ margin: "20px 0" }}>
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              id={counter.id}
              value={counter.value}
              onIncrement={(id) => updateCounter(id, 1)}
              onDecrement={(id) => updateCounter(id, -1)}
              onReset={resetCounter}
              onRemove={removeCounter}
            />
          ))}
        </div>
        {/* <h2>Total Count: {totalCount}</h2> */}
      </div>
    )
}

export default MultiCounterApp