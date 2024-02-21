import React, { Fragment, useState } from "react";
import header from "../images/Dream_Market-removebg-preview 1.png";
import { BrowserRouter, Route, Routes, NavLink ,Link } from "react-router-dom";
import Index from "../view/Index";
import About from "../view/About";
import Contact from "../view/Contact";
import Gategories from "../view/Gategories";
import Bulk from "../view/Bulk";
import { cnt } from "../App";


const Navbar = () => {
   return(
    
    <cnt.Consumer>
    {
        (re)=>{
          return (
              <Fragment>
                 
                  <BrowserRouter basename="/react">
                  
                      <div className=" container">
                          <div className="col-xs-12" style={{ padding: "0px", }}>
                        
                              <nav className="navbar navbar1 " role="navigation">
                                  <div className="text-center container">
                                      <div className="navbar-header navbar-header1">
      
      
                                          <button type="button" className="navbar-toggle navbar-toggle1" data-target="#nav"
                                              data-toggle="collapse" onClick={ ()=> re.show('.shh')}>
                                              <i className="fa fa-bars "></i>
                                          </button>
                                          <div className="span2">
                                              <img src={header} className="img-responsive" alt="" />
                                          </div>
                                      </div>
                                      <div className={ 'shh collapse navbar-collapse'} id="nav">
                                          <ul className="nav navbar-nav navbar-right nav-link1">
      
                                              <li className="nav-link">
                                                  <NavLink to="/">
                                                      Home
                                                  </NavLink>
                                              </li>
                                              <li className="nav-link">
                                                  <NavLink to="/Gategories">
      
                                                      Gategories
      
                                                  </NavLink>
                                              </li>
                                              <li className="nav-link">
                                                  <NavLink to="/Contact">
      
                                                      Contact Use
      
                                                  </NavLink>
                                              </li>
      
                                              <li className="nav-link">
                                                  <NavLink to="/About">
      
                                                      About Use
      
                                                  </NavLink>
                                              </li>
                                              <li className="nav-link">
                                                  <Link to="">
      
                                                    Bulk 
      
                                                  </Link>
                                              </li>
                                             
      
      
      
      
                                          </ul>
                                      </div>
                                  </div>
                              </nav>
      
      
                          </div>
                      </div>
                      <Routes>
                          <Route path="/" element={<Index />} ></Route>
                          <Route path="/About" element={<About />}></Route>
                          <Route path="/Contact" element={<Contact />}></Route>
                          <Route path="/Gategories" element={<Gategories />}></Route>
                          <Route path="/Bulk" element={<Bulk />}></Route>
                      </Routes>
                  </BrowserRouter>
      
              </Fragment>
          )
        }
    }
</cnt.Consumer>
   )



  
}
export default Navbar;