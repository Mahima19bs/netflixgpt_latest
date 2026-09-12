import { useEffect } from "react";
import {API_OPTIONS} from "../../utils/constants.js";
import { addNowPlayingMovies } from "../../utils/movieSlice.js";
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies.js';
import usePopularMovies from '../../hooks/usePopularMovies.js';
import MainContainer from "../MainContainer.js";
import SecondaryContainer from "../SecondaryContainer.js";
import useTopRated from "../../hooks/useTopRated.js";
import useUpcommingMovies from "../../hooks/useUpcommingMovies.js";
import { useSelector } from "react-redux";
import GPTSearch from "../GPTSearch.js";
const Browse=()=>{
    //custom hook
    useNowPlayingMovies();
    usePopularMovies();
    useTopRated();
    useUpcommingMovies();
    const gptSearch=useSelector(store=>store.gpt.showGptSearch);

    return(
        <div>
           {
            gptSearch ?  <GPTSearch/> : <><MainContainer/>
            <SecondaryContainer/></>
           }        
        </div>
    )
}
export default Browse;