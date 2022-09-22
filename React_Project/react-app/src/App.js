import React, { useEffect, useState } from 'react';
import './App.css';
import UseEffectExamples from './UseEffectExamples';

function App() {
  const[hide,setHide] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={()=>setHide(!hide)}/> Hide 
      {hide ? null : <UseEffectExamples />}
    </>
  )

};
//shift+alt+f = to set code format
export default App;
