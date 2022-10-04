import React, { useEffect, useState } from 'react';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
// import DisplayGrade from './DisplayGrade';
// import GrandParent from './GrandParent';
// import UseEffectExamples from './UseEffectExamples';
// import ValueContext from './ValueContext';
// import ErrorBoundary from './ErrorBoundary';
import {movieDTO} from './movies/movies.model.d'

function App() {
  // const [hide, setHide] = useState(false);
  // const grades = [95,75,-5,55];

  const testMovie: movieDTO = {
    id:1,
    title:'React JS',
    poster:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
  }
  return (
    <>
      {
      /* <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />}

      <ValueContext.Provider value={hide}>
        <GrandParent />
      </ValueContext.Provider> */
      }
      
      {
      /* {
        grades.map((grade,index)=>
        <ErrorBoundary key={index} errorUI={<h3>There was an error displaying the grade</h3>}>
            <DisplayGrade grade={grade}/>
        </ErrorBoundary>
        )
      } */
      }

      <IndividualMovie {...testMovie} />
    </>
  )

};
//shift+alt+f = to set code format
export default App;
