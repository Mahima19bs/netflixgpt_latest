import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice.js";

const useTopRated=()=>{
      const dispatch=useDispatch();
    
    const getTopRatedMovies = async () => {
        console.log("Hello....")
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1`,API_OPTIONS);
        const fetchedData = await response.json();
        console.log("top rated movies",fetchedData);
        dispatch(addTopRatedMovies(fetchedData.results));
    }
    useEffect(()=>{
      getTopRatedMovies();
    },[])
}
export default useTopRated;