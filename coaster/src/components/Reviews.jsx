import { React, useState } from 'react'
import axios from 'axios'

function Reviews() {
  const [fName, setName] = useState("")
  const [fEmail, setEmail] = useState("")

  const getDetails = () => {
alert(fEmail)    
return {
      name: fName,
      comments: fEmail,
      rating: 320457

    }
 }

 const form = async () => {
  const details = getDetails()
//   const something = await axios.post(`/api/coasters/review/623cc3a36266b13db7757bf6`, {details})
//   .then(function () {
//     alert('got here');
// })
// .catch(function (error) {
//     alert(error);
// });
  const something = axios.get(`127.0.0.1:3001/api/allCoasters`)  
  alert(something.details)
  // .coasters[0].reviews[2].name)
 }

  return ( 
    <div className='review'>
        <h2>Hi, I am a review box!</h2>
        <h3>Please write your review here</h3>

        <form id="feedback" action="">
          <div class="pinfo">Your personal info</div>
  
              <div class="form-group">
              <div class="col-md-4 inputGroupContainer">
              <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input  name="name" placeholder="John Doe" class="form-control"  type="text" onChange={(e) => setName(e.target.value)}/>
          </div>
             </div>
          </div>
            
          <div class="form-group">
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input name="email" type="text" class="form-control" placeholder="john.doe@yahoo.com" onChange={(e) => setEmail(e.target.value)} />
              <button onClick={()=> form()}>Cleek</button>
               </div>
            </div>
          </div>
   </form>
   {/* {console.log('this is a log')} */}

</div>
  )
}

export default Reviews