import React from 'react'
import image from '../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg'
import { Link } from 'react-router-dom'

function Coasters() {
  return (
    <div className='Coaster-details'>
      <h1 className='Coasters'>
        All Coasters we have is going to be on this page
      </h1>
      <Link to='./coasters/:coasterId'> 
        <img src={image} alt ='' style={{width: '25vw', marginTop: '50px'}}/>
        <h1>RollerCoaster 1</h1>
        <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
      </Link>
      <div>
        <img src={image} alt ='' style={{width: '25vw', marginTop: '50px'}}/>
        <h1>RollerCoaster 1</h1>
        <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
      </div>
    </div>
  )
}

export default Coasters