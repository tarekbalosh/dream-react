import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import { cnt } from "../App";
//import {fastart} from "react-icons/fa"
const Contact = () => {
     return(
        <cnt.Consumer>
        {
            (re)=>{
               return (
                   <div>
           
                       <div className=""  style={{padding: "0px" , marginTop:"-100px"}}>
           
           
                           <div className="col-xs-12" style={{ padding: "0px" }}>
                               <div className="col-xs-12 text-center imgback img-responsive" style={{ padding: "0px" }}>
           
           
           
                                   <nav className="navbar navbar2 " role="navigation" >
                                       <div className="text-center container">
                                           <div className="navbar-header navbar-header2">
           
           
                                               <button type="button" className="navbar-toggle navbar-toggle2" data-target="#nav2"
                                                   data-toggle="collapse" onClick={ ()=> re.show('.sho')}>
                                                   <i className="fa fa-bars "></i>
                                               </button>
           
                                           </div>
                                           <div className={' sho collapse navbar-collapse'} id="nav2">
                                               <ul className="nav navbar-nav navbar-center nav-link2">
           
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Farm Fresh Produce
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Grocery Specials
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Appetizers
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Hot Foods
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Bakery
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Fresh Meat
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Dairy
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Frozen
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="/Bulk">
                                                           Bulk Nuts
                                                       </Link>
                                                   </li>
                                                   <li className="nav-item ">
                                                       <Link to="">
                                                           Food Stamp Voucher
                                                       </Link>
                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                   </nav>
           
           
           
                                   <div className="pad col-xs-12">
                                       <p className="paragraph1">Lorem ipsum dolor sit amet, </p>
                                       <p className="paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.green modern
                                           living room </p>
                                       <div className="col-xs-12 more">
                                           <span className="m-auto">See More</span>
                                       </div>
                                   </div>
           
                               </div>
           
                           </div>
           
                           <div class="container abtop">
                               <div class="col-xs-12 col-sm-6 part1">
                                   <div class="ab3">
                                       <p class="lead">How can we help <br /><span class="you">you</span> </p>
                                       <p class="loremparagraph">We’re here to help and answer any question you might have. We look forward to
                                           hearing from you 🙂
                                       </p>
           
                                   </div>
                               </div>
                               <div class="col-xs-12 col-sm-6 part">
                                   <div class="ab3 milelocation">
                                       <h2>15 Mile Location </h2>
                                       <div class="liner"></div>
                                       <ul class="list-unstyled part1">
                                           <li> <i class="fa fa-phone "></i> </li>
                                           <li class="number">(586) 722-7695</li>
                                       </ul>
                                       <ul class="list-unstyled part3">
                                           <li> <i class="fa fa-user "></i> </li>
                                           <li>3815 15 Mile Rd,<br />
                                               Sterling Heights, MI 48310</li>
                                       </ul>
                                       <ul class="list-unstyled part3">
                                           <li class="text-left"> <i class="fa fa-phone"></i> </li>
                                           <li>Mon-Sat<br />
                                               8:00AM – 9:00PM   </li>
           
                                           <li>Sun <br /> 8:00AM- 8:00PM   </li>
           
                                       </ul>
           
           
           
           
           
           
           
                                   </div>
                               </div>
                           </div>
           
           
                           <div class="container map">
                               <div class="col-xs-12">
                                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width="100%" height="300px" ></iframe>
           
                               </div>
                           </div>
                           <div class="container ">
                               <div class="col-xs-12 col-sm-6 part1">
                                   <div class="ab3">
                                       <p class="lead">How can we help <br /><span class="you">you</span> </p>
                                       <p class="loremparagraph">We’re here to help and answer any question you might have. We look forward to
                                           hearing from you 🙂
                                       </p>
           
                                   </div>
                               </div>
                               <div class="col-xs-12 col-sm-6 part">
                                   <div class="ab3 milelocation">
                                       <h2>15 Mile Location </h2>
                                       <div class="liner"></div>
                                       <ul class="list-unstyled part1">
                                           <li> <i class="fa fa-phone "></i> </li>
                                           <li class="number">(586) 722-7695</li>
                                       </ul>
                                       <ul class="list-unstyled part3">
                                           <li> <i class="fa fa-user "></i> </li>
                                           <li>3815 15 Mile Rd,<br />
                                               Sterling Heights, MI 48310</li>
                                       </ul>
                                       <ul class="list-unstyled part3">
                                           <li class="text-left"> <i class="fa fa-phone"></i> </li>
                                           <li>Mon-Sat<br />
                                               8:00AM – 9:00PM   </li>
           
                                           <li>Sun <br /> 8:00AM- 8:00PM   </li>
           
                                       </ul>
           
           
                                   </div>
                               </div>
                           </div>
           
           
                           <Footer />
                       </div>
                   </div>
               )
            }
        }
    </cnt.Consumer>
     )
  
   
}
export default Contact;