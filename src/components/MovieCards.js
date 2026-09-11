import React from 'react'
import { IMG_CON_URL } from '../utils/constants'
const MovieCards = ({title, posterPath}) => {
  return (
    <div className="flex w-28 shrink-0 flex-col gap-2">
      <img className="h-40 w-28 object-cover" src={`${IMG_CON_URL}${posterPath}`} alt={title} />
      <p className="block w-28 break-words text-sm font-semibold text-white" title={title}>
        {title || 'Untitled movie'}
      </p>
    </div>
  )
}

export default MovieCards
