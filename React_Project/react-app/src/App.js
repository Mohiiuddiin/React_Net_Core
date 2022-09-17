import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const[myDate,myDateUpdate] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      myDateUpdate(new Date());
    }, 1000);

    return()=>clearInterval(intervalId);
  })
  return ( 
     <div>
      <h3>example react</h3>
      <input />
      <div>{myDate.toString()}</div>
    </div>
  );
}
//shift+alt+f = to set code format
export default App;
