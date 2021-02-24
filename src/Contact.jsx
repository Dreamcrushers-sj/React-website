import React from 'react'
import {useState} from "react";

function Contact() {

    const [data,  setData] = useState({
       first: "",
       last: "",
       email:"",
       phone:"",
       password: ""
    })

    const Inputevent = (event) => {
        const { name, value} = event.target;
       
       setData((preVal) => {
           return {
               ...preVal,
               [name]: value,
           };
       });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
      `My name is ${data.first}. ${data.last}.My email address is ${data.email}.My phone number is ${data.phone}.`
        );
    };

    return (
        <div>
             <div className="my-5">
                    <h1 className="text-center"> Contact US</h1>
            </div>
            <div className="container contact_div">
                 <div className="row">
               <div className="coi-md-6 col-10 mx-auto">
                 <form onSubmit={formSubmit}>
                 
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" value={data.email} onChange={Inputevent} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">First Name</label>
    <input name="first" value={data.first} type="text" onChange={Inputevent}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group">
  <label for="exampleInputPassword1">Last Name</label>
  <input name="last" value={data.last} type="text" onChange={Inputevent}  className="form-control" id="exampleInputPassword1"/>
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Password</label>
  <input name="password" value={data.password} onChange={Inputevent}  type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="form-group">
  <label for="exampleInputPassword1">Phone No:</label>
  <input name="phone" value={data.phone} type="number" onChange={Inputevent}  className="form-control" id="exampleInputPassword1"/>
</div>
  <div className="form-group form-check my-2">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-outline-primary">Submit</button>
</form>
                 
               </div>
                 </div>
            </div>

         </div>
    )
}

export default Contact
