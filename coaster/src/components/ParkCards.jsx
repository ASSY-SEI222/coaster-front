import React from 'react'

function ParkCards(props) {
  return (
    <div className="card Coaster-card" >
      <li className="park-item" id={props.name}>
        <h3>Name: {props.name}</h3>
        <h5>Location: {props.capitol}</h5>
      </li>
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

export default ParkCards