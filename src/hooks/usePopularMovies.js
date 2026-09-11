import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice.js";

const usePopularMovies=()=>{
      const dispatch=useDispatch();
    
    const getPopularMovies = async () => {
        console.log("Hello....")
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1`,API_OPTIONS);
        const fetchedData = await response.json();
        console.log("Popular movies",fetchedData);
        dispatch(addPopularMovies(fetchedData.results));
    }
    useEffect(()=>{
      getPopularMovies();
    },[])
}
export default usePopularMovies;