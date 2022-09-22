import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Simple from './Simple';
// import Expressions from './Expressions';
// import Conditionals from './Conditionals';
// import Events from './Events';
//import ConditionalsIF from './ConditionalsIF';
// import MapExample from './MapExample';
// import ConditionalsIfSeveralComponents from './ConditionalsIfSeveralComponents';
import CSSExample from './CSSExamples';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Simple/>
    <Expressions/>
    <Conditionals/> */}
    {/* <Events/> */}
    {/* <ConditionalsIF/> */}
    {/* <MapExample/> */}
    {/* <ConditionalsIfSeveralComponents/> */}
    {/* <CSSExample></CSSExample> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
