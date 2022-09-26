import React, { useEffect, useState } from 'react';
import './App.css';
import DisplayGrade from './DisplayGrade';
// import GrandParent from './GrandParent';
// import UseEffectExamples from './UseEffectExamples';
// import ValueContext from './ValueContext';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const [hide, setHide] = useState(false);
  const grades = [95,75,-5,55];

  return (
    <>
      {/* <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />}

      <ValueContext.Provider value={hide}>
        <GrandParent />
      </ValueContext.Provider> */}
      
      {
        grades.map((grade,index)=>
        <ErrorBoundary key={index} errorUI={<h3>There was an error displaying the grade</h3>}>
            <DisplayGrade grade={grade}/>
        </ErrorBoundary>
        )
      }
    </>
  )

};
//shift+alt+f = to set code format
export default App;
