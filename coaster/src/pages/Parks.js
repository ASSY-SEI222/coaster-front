import React from 'react'
import { Link } from 'react-router-dom'
import ParkCards from '../components/ParkCards'
import image from '../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg'
import { useState, useEffect } from "react"
import axios from 'axios'
// import CoasterDetails from './CoasterDetails'
// import ParkDetails from '../components/ParkDetails'
// import { Link } from 'react-router-dom'

function Home(props) {
  const [ parks, setParks ] = useState ([])

  const getParks = async () => {
    const res = await axios("http://127.0.0.1:3001/api/allParks")
    // const data = res.json()
    setParks(res.data.parks)
    
}

useEffect(()=> {
    getParks()
}, [])
  return (
    <div className='home'>
      <h1>Welcome to the homepage</h1>
        {parks.map((park) => {
          return (
            <Link to={`/parks/details/${park._id}`}> 
              <div key={park._id}>
                  <h1>{park.parkName}</h1>
                  <h5>Location:{park.location}</h5>
                  <img src={park.picture} alt={''}/>
              </div>
            </Link>
        )})}
    </div>
  )
}

export default Home