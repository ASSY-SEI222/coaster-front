import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Coasters() {
  const [ coasters, setCoasters ] = useState ([])

  const getCoasters = async () => {
    const res = await axios("http://127.0.0.1:3001/api/allCoasters")
    // const data = res.json()
    setCoasters(res.data.coasters)
    
}

useEffect(()=> {
    getCoasters()
}, [])
  return (
    <div className='home'>
      <h1>Welcome to the homepage</h1>
        {coasters.map((coaster) => {
          return (
            <Link to={`/coasters/details/${coaster._id}`}> 
              <div key={coaster._id}>
                  <h1>{coaster.rideName}</h1>
                  <p>About:{coaster.aboutRide}</p>
                  <p>Minimum Height: {coaster.minHeight}</p>
                  <p>Ride Peak: {coaster.ridePeak}</p>
                  <p>Speed: {coaster.speed}</p>
                  <p>Track Length: {coaster.trackLength}</p>
                  {coaster.reviews.map((rev) => {
                    return (
                    <div>
                      <p>Reviewer: {rev.name}</p>
                      {console.log(rev)}
                      <p>Comment: {rev.comment}</p>
                      <p>Rating: {rev.rating}</p>
                    </div>
                  )})}
                  <img src={coaster.image} alt={''}/>
              </div>
            </Link>
        )})}
    </div>
  )
}

export default Coasters