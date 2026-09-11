import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice.js";

const useNowPlayingMovies=()=>{
      const dispatch=useDispatch();
    
    const getNowPlayingMovies = async () => {
        console.log("Hello....")
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
        const fetchedData = await response.json();
        console.log(fetchedData);
        dispatch(addNowPlayingMovies(fetchedData.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;