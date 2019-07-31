import React from 'react'
// import { Link } from 'react-router-dom'

const RadioCard = ({ title, picture }) => {
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
    </div>
  )
}

export default RadioCard
