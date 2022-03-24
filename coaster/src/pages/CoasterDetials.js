import React from 'react'
import image from '../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg'


function CoasterDetials() {
  return (
    <div>
        <img src={image} alt ='' style={{width: '25vw', marginTop: '50px'}}/>
        <h1>RollerCoaster 1</h1>
        <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
    </div>
  )
}

export default CoasterDetials