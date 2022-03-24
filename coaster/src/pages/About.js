import React from 'react'
import image from '../images/matt-bowden-GZc4fnQsaWQ-unsplash.jpg'

function About() {
  return (
    <div className="about">
      <h2 className='header-two'>About This Project</h2>
      <div>
        <p className='p-five'>
          For this group project, we are building a full-stack app with a database of fun, exciting rollercoasters located in different theme parks in America.</p>
         
          <p className='p-five'> Back-End:
          Parks and rollercoasters will be in the different collections and contain names, a short paragraph of descriptions, and some other fun facts.</p>

          <p className='p-five'>Front-End:
          After discussion, we decided to feature 5 different theme parks on the landing page with an 'add more' call to action button to let more parks able to add to our database later by our users. Once you clicked the featured parks, you'll be able to see which rollercoaster is in the theme park. With some introduction to the rollercoaster and some fun facts we listed, you will find your next vacation destination in no time!</p>
          <img src={image} alt='' style={{width: '75vw', marginTop: '50px'}} />
      </div>
    </div>
  )
}

export default About