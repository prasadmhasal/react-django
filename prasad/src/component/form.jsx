import React from 'react'



function Form() {
  return (
    <div className='container mt-5'>
        <div className='row justify-content-center '>
            <div className='col-lg-8'>
        <form action="" method="post" className="shadow p-4 border">
        <h1>Registration Form</h1>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" className="form-control" id="age" name="age" />
        </div>
        <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" className="form-control" id="city" name="city" />
        </div>
        <button type="submit" className="btn btn-primary mt-1">Submit</button>
      </form>

            </div>

        </div>

    </div>
  )
}
export default Form
