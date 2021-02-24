import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Image/img2.gif";

function Common(props) {
    return (
        <div>
             <div>
       <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
              <div className="row">
                 <div className="col-10 mx-auto">
                     <div className="row">
                   <div className="coi-md-6 pt-5 pt-lg-0 order-2 order-lg-1" >
                    <h1>
                        {props.name}
                        <strong className="brand-name"> Dream Crusher </strong>
                    </h1>
                       <h2>
                           We are the team of talented developer making websites
                       </h2>
                      <div className="mt-3">
                       <NavLink to={props.visit} className="btn-get-started">
                           {props.btname}
                       </NavLink>
                      </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 header-img" >
                     <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                   </div>
                   </div>
                 </div>
              </div>
           </div>
           </section>           
 </div>
        </div>
    )
}

export default Common;
