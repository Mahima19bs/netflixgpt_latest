    import React, { useEffect,useState } from 'react';
    import { API_OPTIONS } from "../utils/constants.js";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice.js";

    const useTrailterVideo=({movieId})=>{
    const dispatch=useDispatch();
    const videosBackground = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const videoBackground = await data.json();
        console.log(videoBackground.results);
        const filteredData = videoBackground.results.filter((d) => {
            return d.type == 'Trailer'
        });
        dispatch(addTrailerVideo(filteredData[2]));
        // setId(filteredData[2].key);
    }
    useEffect(() => {
        videosBackground();
    }, [])
    }
    export default useTrailterVideo;