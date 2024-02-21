import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer.js';
import { cnt } from "../App.js";

const Gategories = () => {

    return (
  <cnt.Consumer>
      {
          (re)=>{
              return(
                <div>
         
     
                <div className="col-xs-12" style={{padding: "0px"}}>
                    <div className="col-xs-12 text-center imgback img-responsive" style={{padding: "0px"}}>
            
            
            
                        <nav className="navbar navbar2 " role="navigation" >
                            <div className="text-center container">
                                <div className="navbar-header navbar-header2">
            
            
                                    <button type="button" className="navbar-toggle navbar-toggle2" data-target="#nav2"
                                        data-toggle="collapse" onClick={()=> re.show('.sho')}>
                                        <i className="fa fa-bars "></i>
                                    </button>
            
                                </div>
                                <div className= 'sho collapse navbar-collapse'  id="nav2">
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
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                        <div className="col-xs-12 catag">
                            <p className="arrivals"> More Categories</p>
                        </div>
                        <div className="col-xs-12">
                            <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.green modern living room</p>
                        </div>
                        <div className="container">
                            <div className="row " id="sq">
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict1">
                                        <div className="bacopacity">
                                            <h2>Farm Fresh Produce </h2>
                                            <p className="Find">Find your favorite fresh produce at Dream Market!<br />
                                                All our produce are grown in US and Canada unless <br />
                                                otherwise indicated.</p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict2">
                                        <div className="bacopacity">
                                            <h2>Appetizers </h2>
                                            <p className="Find">We are probably the only store in town to offer you <br /> a huge selection of
                                                appetizers
                                                that will make your <br />party guests go crazy!
                                            </p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 sq ">
                                    <div className="dict3">
                                        <div className="bacopacity">
                                            <h2>Bulk Nuts </h2>
                                            <p className="Find">Your Holidays, Parties, and Family Gatherings are incomplete without a variety
                                                of
                                                nuts. And where to get the best nuts from <br />than from Dream Market!
                                            </p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict4">
                                        <div className="bacopacity">
                                            <h2>Farm Fresh Produce</h2>
                                            <p className="Find">Find your favorite fresh produce at Dream Market!<br />
                                                All our produce are grown in US and Canada unless<br />
                                                otherwise indicated.</p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict5">
                                        <div className="bacopacity">
                                            <h2>Fresh meat</h2>
                                            <p className="Find">Find your favorite fresh produce  at Dream Market!<br />
                                                All our produce are grown in US <br />and Canada unless
                                                otherwise indicated.</p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict6">
                                        <div className="bacopacity">
                                            <h2>Dairy products</h2>
                                            <p className="Find">We are probably the only store in town to offer<br /> you a huge selection of
                                                appetizers<br /> that will make your party guests go crazy!
                                            </p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict7">
                                        <div className="bacopacity">
                                            <h2>Frozen products </h2>
                                            <p className="Find">Your Holidays, Parties, and Family Gatherings are incomplete without a variety
                                                of nuts.<br /> And where to get the best nuts from than from Dream Market!
                                            </p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 sq">
                                    <div className="dict8">
                                        <div className="bacopacity">
                                            <h2>Food Stamps </h2>
                                            <p className="Find">Find your favorite fresh produce at Dream Market!<br />
                                                All our produce are grown in US and Canada<br /> unless
                                                otherwise indicated.
                                            </p>
                                            <span>See More &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </span>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                        </div>
            
                        <Footer />
                    </div >
              )
          }
      }
  </cnt.Consumer>
      


    )
}
export default Gategories;