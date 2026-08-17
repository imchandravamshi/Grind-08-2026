import { useState, useEffect } from "react";

function App() {
  const [counterValue, setCounterValue] = useState(true);


useEffect(function () {
  setInterval(function () {
    setCounterValue(counterValue => !counterValue);
  }, 5000);
},[]);


  return (
    <div>
      {counterValue?<Counter></Counter>:null}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    const intervalId = setInterval(function () {
      setCount(count => count + 1);
    }, 1000);

    return () =>{
      clearInterval(intervalId);
    }
  },[]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default App;
