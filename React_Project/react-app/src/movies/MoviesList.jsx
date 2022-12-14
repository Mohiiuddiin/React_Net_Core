import GenericList from "../utils/GenericList";
import Loading from "../utils/loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model.d";
import css from './MoviesList.module.css'
export default function MoviesList(props: moviesListProps) {
    // if(!props.movies){
    //     return <Loading/>
    // }else if(props.movies.length === 0){
    //     return <>There are no movies to display.</>
    // }else{
    //     return(

    //     )
    // }
    return  <GenericList 
            // loadingUI={<>Loading...</>}
            list={props.movies}>
                <div className={css.div}>
                {
                    props.movies?.map(
                        movie => <IndividualMovie {...movie} key={movie.id} />
                    )
                }
                </div>
            </GenericList>
    

}

interface moviesListProps {
    movies?: movieDTO[];
}