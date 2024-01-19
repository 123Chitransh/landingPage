// import { cleanup } from '@testing-library/react';
import React, { useState } from 'react'

export default function Contact() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal, [name]: value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}`
    );
    
  }

  return (
    <>
      <div className='my-5 servicehead'>
        <p>Contact Us</p>
      </div>
      <div className="container">
        <div className='contact'>
          <form onSubmit={formSubmit} action="">
            <div className="mb-3">
              <label forhtml="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" required value={data.fullname} onChange={inputEvent} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label forhtml="exampleFormControlInput1" className="form-label">Phone No.</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" required value={data.phone} onChange={inputEvent} placeholder="Enter your number" />
            </div>
            <div className="mb-3">
              <label forhtml="exampleFormControlInput1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" required value={data.email} onChange={inputEvent} placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label forhtml="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" required value={data.msg} onChange={inputEvent} rows="3"></textarea>
            </div>
            <div className="col-12">
              <button className="button" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}
