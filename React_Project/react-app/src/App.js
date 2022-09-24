import React, { useEffect, useState } from 'react';
import './App.css';
import GrandParent from './GrandParent';
import UseEffectExamples from './UseEffectExamples';
import ValueContext from './ValueContext';

function App() {
  const [hide, setHide] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />}

      <ValueContext.Provider value={hide}>
        <GrandParent />
      </ValueContext.Provider>

    </>
  )

};
//shift+alt+f = to set code format
export default App;
