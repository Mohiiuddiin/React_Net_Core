import React, { useEffect,useState } from 'react';
import './App.css';
// import IndividualMovie from './movies/IndividualMovie';
// import DisplayGrade from './DisplayGrade';
// import GrandParent from './GrandParent';
// import UseEffectExamples from './UseEffectExamples';
// import ValueContext from './ValueContext';
// import ErrorBoundary from './ErrorBoundary';
import MoviesList from './movies/MoviesList';
// import { landingpageDTO } from './movies/movies.model.d';

function App() {
  // const [hide, setHide] = useState(false); 
  // const grades = [95,75,-5,55];
 
  // const testMovie: movieDTO = {
  //   id:1,
  //   title:'React JS',
  //   poster:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
  // }
  const [movies,setMovies] = useState({});
useEffect(()=>{
  const timerId = setTimeout(()=>{
    setMovies({
      inThreaters:[
        {
          id:1,
          title:'React JS',
          poster:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
        },
        {
          id:2,
          title:'Angular',
          poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
        }
      ],
      upcomingReleases:[
        {
          id:1,
          title:'React Native',
          poster:'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png'
        },
        {
          id:2,
          title:'Angular',
          poster:'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg'
        }
      ]
    })
  },1000);
  return () => clearTimeout(timerId);
})

  // const inThreaters: movieDTO[] = [
  //   {
  //     id:1,
  //     title:'React JS',
  //     poster:'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
  //   },
  //   {
  //     id:2,
  //     title:'Angular',
  //     poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  //   }
  // ];

  // const upcomingReleases: movieDTO[] = [
  //   {
  //     id:1,
  //     title:'React Native',
  //     poster:'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png'
  //   },
  //   {
  //     id:2,
  //     title:'Angular',
  //     poster:'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg'
  //   }
  // ];
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

      {/* <IndividualMovie {...testMovie} /> */}

      <h3>In Treaters</h3>
      <MoviesList movies={movies.inThreaters}/>
      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases}/>
    </>
  )

};
//shift+alt+f = to set code format
export default App;
