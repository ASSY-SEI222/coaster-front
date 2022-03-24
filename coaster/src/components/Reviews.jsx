import React from 'react'

function Reviews() {
  return (
    <div className='review'>
        <h2>Hi, I am a reveiw box!</h2>
        <h3>Please write your review here</h3>

        <form id="feedback" action="">
          <div class="pinfo">Your personal info</div>
  
              <div class="form-group">
              <div class="col-md-4 inputGroupContainer">
              <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input  name="name" placeholder="John Doe" class="form-control"  type="text" />
          </div>
             </div>
          </div>
            
          <div class="form-group">
            <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
              <input name="email" type="email" class="form-control" placeholder="john.doe@yahoo.com" />
               </div>
            </div>
          </div>
   </form>
</div>
  )
}

export default Reviews