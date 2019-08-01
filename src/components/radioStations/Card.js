import React from 'react'

const Card = ({ title, picture }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{title}</div>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={picture} alt={title} />
        </figure>
      </div>
    </div>
  )
}
export default Card
