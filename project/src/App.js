import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(0);
  const increment=()=>{
    setcount(count+1);
  }
  const decrement=()=>{
    setcount(count-1);
  }
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick ={increment}>increment</button>
      <button onClick ={decrement}>decrement</button>
    </div>
  );
}

export default App;
