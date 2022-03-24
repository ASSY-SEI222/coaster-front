import React from 'react'

function ParkCards(props) {
  return (
    <li className="park-item" id={props.name}>
        <h3>Name: {props.name}</h3>
        <h5>Location: {props.capitol}</h5>
      </li>
  )
}

export default ParkCards