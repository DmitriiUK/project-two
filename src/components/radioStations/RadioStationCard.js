import React from 'react'

const RadioStationCard = ({ title, type, picture, tracklist }) => {
  return (
    <div className="radio">
      <div className="radio-header">
        <div className="radio-reader-title">
          {title}
        </div>
      </div>
      <div className="radio-image">
        <figure className="image">
          <img src={picture} alt={title} />
        </figure>
      </div>
      <div className="radio-header">
        <div className="radio-reader-title">
          {type}
        </div>
      </div>
      <div className="radio-header">
        <div className="radio-reader-title">
          {tracklist}
        </div>
      </div>
    </div>
  )
}

export default RadioStationCard
