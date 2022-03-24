import React from 'react'
import Reviews from '../components/Reviews'
import image from '../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg'



function ParkDetails() {
  return (
    <div>
      <div className='ParkDetails'>
          <img src={image} alt ='' style={{width: '50vw', marginTop: '50px', textAlign:"center"}}/>
          <h1>Park 1</h1>
          <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
      </div>
      
      <div className='CoasterDetails'>
          <img src={image} alt ='' style={{width: '50vw', marginTop: '50px', textAlign:"center"}}/>
          <h1>Coaster 1</h1>
          <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
      </div>
      <Reviews />
    </div>
  )
}

export default ParkDetails