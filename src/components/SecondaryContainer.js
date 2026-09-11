import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies=useSelector(state=>state.movies.nowPlayingMovies);
  const popularMovies=useSelector(state=>state.movies.popularMovies);
  const topRatedMovies=useSelector(state=>state.movies.topRatedMovies);
  const upcommingMovies=useSelector(state=>state.movies.upcommingMovies);
  return (
    <div className='bg-black'>
      {nowPlayingMovies && <MoviesList mainTitle="Now Playing" movies={nowPlayingMovies}/>} 
      {popularMovies && <MoviesList mainTitle="Popular Movies" movies={popularMovies}/>} 
      {topRatedMovies && <MoviesList mainTitle="Top Rated Movies" movies={topRatedMovies}/>} 
      {upcommingMovies && <MoviesList mainTitle="Upcoming Movies" movies={upcommingMovies}/>} 
    </div>
  )
}

export default SecondaryContainer
