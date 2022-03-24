import React from 'react'

function CoasterCard(props) {
  return (
    <div className="card Coaster-card" >
    <div className="img-wrapper">
      <img src={props.image} alt={props.name}></img>
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.name}</h3>
      <p>{props.rating}</p>
    </div>
  </div>
  )
}

export default CoasterCard