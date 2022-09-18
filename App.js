import React, {useState } from "react";
import './App.css';
let adjstinterval = undefined;
function App() {
  const [watch,setWatch] = useState(0)
  const [started,setStarted] = useState(false)

  const startWatch=()=>{
    adjstinterval = setInterval(()=>{
     setWatch((x)=>x+1)
    },1000)
    setStarted(true)
  }
  const stopWatch=()=>{
      clearInterval(adjstinterval);
      setStarted(false)
  }
  const resetWatch=()=>{
   setWatch(0)
     clearInterval(adjstinterval);
      setStarted(false)
  }

  return (
    <div className='back'>
    <div className="App">
    <h1>start stop watch</h1> 
    <h2>{watch}</h2>
    <button className='start' disabled={started} onClick={startWatch}>start</button>
    <button  className='stop' onClick={stopWatch}>stop</button>
    <button  className='reset' onClick={resetWatch}>reset</button>
    </div>
    </div>
  );
}
 export default App;
