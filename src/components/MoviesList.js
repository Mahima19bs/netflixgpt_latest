import React from 'react'
import MovieCards from './MovieCards'

const MoviesList = ({movies,mainTitle}) => {
  return (
    <>
    <h6 className='text-white'>{mainTitle}</h6>
    <div className='px-8 py-4'>
      <div className='no-scrollbar flex gap-4 overflow-x-auto'>
        {movies?.map((movie) => (
          <MovieCards
            key={movie.id}
            title={movie.title || movie.original_title}
            posterPath={movie.poster_path} 
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default MoviesList
