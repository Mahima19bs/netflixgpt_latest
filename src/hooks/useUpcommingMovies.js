import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addUpcommingMovies } from "../utils/movieSlice.js";

const useUpcommingMovies=()=>{
      const dispatch=useDispatch();
    
    const getUpcommingMovies = async () => {
        console.log("Hello....")
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?page=1`,API_OPTIONS);
        const fetchedData = await response.json();
        console.log("Popular movies",fetchedData);
        dispatch(addUpcommingMovies(fetchedData.results));
    }
    useEffect(()=>{
      getUpcommingMovies();
    },[])
}
export default useUpcommingMovies;