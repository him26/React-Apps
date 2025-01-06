import { useState } from 'react'
import MultiCounterApp from '../src/components/counter'
import TimerCounter from './components/timer-counter'
import CounterWithLimits from './components/counter-limits'



function App() {
  // const [counter, setCounter] = useState(0)

  // // Call this method to increment counter by one
  // const incrementByOne = () => {
  //     setCounter(counter + 1);
  // };
  // // Call this method to decrement counter by one

  // const decrementByone = () => {
  //   setCounter(counter - 1);
  // }


  return (
   <div>
    <TimerCounter/>
    <CounterWithLimits/>

      {/* <h1>Counter App</h1>
      <div>
        {counter}
      </div>
      <div>
        <button onClick={incrementByOne}>
            <span>Increase</span>
        </button>
        <button onClick={decrementByone}>
          <span>Decrease</span>
        </button>
      </div> */}
   </div>
  )
}

export default App
