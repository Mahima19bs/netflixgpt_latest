import React from 'react'
import {useSelector} from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  //fetch movies through selector:

  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(!movies?.length) return null;
const mainMovie=movies[0];
const moviesId=mainMovie.id;
const {original_title,overview}=mainMovie;
console.log(mainMovie);
    return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={moviesId}/>
    </div>
  )
}

export default MainContainer
