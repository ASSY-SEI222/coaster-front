import React from 'react'
import ParkCards from '../components/ParkCards'
import image from '../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg'
// import axios from 'axios'
// import CoasterDetails from './CoasterDetails'
// import ParkDetails from '../components/ParkDetails'
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to the homepage</h1>

      < ParkCards 
        // {parkCards.map((park)=>(
        //   <ParkCards
        //     name={}
        //     image={}
        //     discribtion={}
        // ))}
      />

    {/* Just a placeholder to show some demo content */}
      <div>
        <img src={image} alt ='' style={{width: '25vw', marginTop: '50px'}}/>
        <h1>RollerCoaster 1</h1>
        <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
      </div>
      <div>
        <img src={image} alt ='' style={{width: '25vw', marginTop: '50px'}}/>
        <h1>RollerCoaster 1</h1>
        <p style={{width: '25vw', display:'inline-block', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget purus pulvinar, pharetra ipsum eget, viverra elit. Integer volutpat bibendum dui ac interdum. In consectetur odio eget volutpat tristique. </p>
      </div>
    </div>
  )
}

export default Home