import React, { useEffect,useState } from 'react'
import { API_OPTIONS } from "../utils/constants.js";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice.js";
import useTrailterVideo from '../hooks/useTrailerVideo.js';

const VideoBackground = ({ movieId }) => {
    // const [id,setId]=useState(0);
    const trailerVideo=useSelector(select=>select?.movies?.trailerVideo);
    useTrailterVideo({movieId});
    return (
        <div >
            <iframe 
            className='w-screen h-[100vh] min-h-[500px]'
            width="560" height="315"  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoBackground
