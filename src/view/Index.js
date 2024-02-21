import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ph1 from '../images/24759.png';
import ph2 from '../images/p-icon1.png';
import ph3 from '../images/p-icon2.png';
import ph4 from '../images/p-icon3.png';
import ph5 from '../images/Screen-Shot-2021-08-30-at-10.13 2.png';
import ph6 from '../images/Screen-Shot-2021-08-30-at-10.13 3.png';
import ph7 from '../images/Screen-Shot-2021-08-30-at-10.13 2 (1).png';
import ph8 from '../images/toppng 2.png';
import ph9 from '../images/PngItem_1144050 3.png';
import ph10 from '../images/Gravity-Scene-iPhone-12-Mockup 1.png';
import { cnt } from "../App";




const Index = () => {
    return(
        <cnt.Consumer>
        {
            (re)=>{
  return (
         <div>
 
 <div className="col-xs-12" style={{padding: "0px"}}>
         <div className="col-xs-12 text-center imgback img-responsive" style={{padding: "0px"}}>
 
 
 
             <nav className="navbar navbar2 " role="navigation" >
                 <div className="text-center container">
                     <div className="navbar-header navbar-header2">
 
 
                         <button type="button" className="navbar-toggle navbar-toggle2" data-target="#nav2"
                             data-toggle="collapse" onClick={()=>re.show('.sho')}>
                             <i className="fa fa-bars "></i>
                         </button>
 
                     </div>
                     <div className='sho collapse navbar-collapse'   id="nav2">
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
                                 <p className="Find">Your Holidays, Parties, and Family Gatherings are  incomplete without a variety of
                                     nuts. And where to  get the best nuts from <br />than from Dream Market!
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
 
                 </div>
             </div>
 
 
             <div className="col-xs-12">
                 <p className="arrivals"> new arrivals</p>
             </div>
             <div className="col-xs-12">
                 <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.green modern living room</p>
             </div>
 
             <div className="container">
                 <div className="col-xs-12">
                     <div className="col-xs-12 col-sm-3 layout">
                         <div className="border">
                             <div className="img2475">
                                 <img className="img-responsive" src={ph1} alt="" />
                             </div>
                             <div className="divproductname text-center">
                                 <p className="productName text-center">Product Name</p>
                             </div>
                         </div>
 
                     </div>
                     <div className="col-xs-12 col-sm-3 layout">
                         <div className="border">
                             <div className="img2475">
                                 <img className="img-responsive" src={ph1} alt="" />
                             </div>
                             <div className="divproductname text-center">
                                 <p className="productName text-center">Product Name</p>
                             </div>
                         </div>
 
                     </div>
                     <div className="col-xs-12 col-sm-3 layout">
                         <div className="border">
                             <div className="img2475">
                                 <img className="img-responsive" src={ph1} alt=""/> 
                             </div>
                             <div className="divproductname text-center">
                                 <p className="productName text-center">Product Name</p>
                             </div>
                         </div>
 
                     </div>
                     <div className="col-xs-12 col-sm-3 layout">
                         <div className="border">
                             <div className="img2475">
                                 <img className="img-responsive" src={ph1} alt="" />
                             </div>
                             <div className="divproductname text-center">
                                 <p className="productName text-center">Product Name</p>
                             </div>
                         </div>
 
                     </div>
 
                 </div>
             </div>
 
 
 
 
             <div className="col-xs-12">
                 <p className="arrivals">More Categories</p>
             </div>
             <div className="col-xs-12">
                 <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.green modern living room</p>
             </div>
 
 
 
 
             <div className="container">
                 <div className="col-xs-12 bacground-p">
                     <div className="col-xs-12 col-sm-4 layout">
                         <div className="text-center">
                             <img src={ph2} className="img-responsive img-circle p-icon1" alt="" />
                         </div>
                         <div className="">
                             <p className="seeaddrees">See Address</p>
                         </div>
                         <div>
                             <p className="ispum">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                                 amet,
                                 consectetur adipiscing elit.</p>
                         </div>
                     </div>
                     <div className="col-xs-12 col-sm-4 layout">
                         <div className="text-center">
                             <img src={ph3} className="img-responsive img-circle p-icon1" alt="" />
                         </div>
                         <div className="">
                             <p className="seeaddrees">See Address</p>
                         </div>
                         <div>
                             <p className="ispum">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                                 amet,
                                 consectetur adipiscing elit.</p>
                         </div>
                     </div>
                     <div className="col-xs-12 col-sm-4 layout">
                         <div className="text-center">
                             <img src={ph4} className="img-responsive img-circle p-icon1" alt="" />
                         </div>
                         <div className="">
                             <p className="seeaddrees">See Address</p>
                         </div>
                         <div>
                             <p className="ispum">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                                 amet,
                                 consectetur adipiscing elit.</p>
                         </div>
                     </div>
 
 
                 </div>
             </div>
 
 
 
 
 
 
 
 
             <div className="col-xs-12">
                 <p className="arrivals">Our Gallery</p>
             </div>
             <div className="col-xs-12">
                 <p className="Lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.green modern living room</p>
             </div>
 
             <div className="container">
                 <div className="col-xs-12">
                     <div className="col-xs-12 col-sm-6">
                         <div className="shopscreen">
                             <img src={ph5} className="img-responsive" alt="" />
                         </div>
 
 
                     </div>
                     <div className="col-xs-8 col-sm-4">
                         <div className="shopscreen">
                             <img src={ph6} className="img-responsive" alt="" />
                         </div>
 
                     </div>
                     <div className="col-xs-4 col-sm-2">
                         <div className="shopscreen">
                             <img src={ph7} className="img-responsive" alt="" />
                         </div>
 
 
 
                     </div>
                     <div className="col-xs-12 more">
                         <span className="m-auto">See More</span>
                     </div>
                 </div>
 
             </div>
             <div className="container">
                 <div className="col-xs-12 divphone">
                     <div className="col-xs-12 col-sm-6  twopart">
                         <div className="square">
                             <p className=" contentext">Download <span className="domest">Domestique</span> Life App Now</p>
                             <p className="lor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit
                                 vitae. Est
                                 tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper
                                 velit.
                                 Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                             </p>
                             <div className="col-xs-4 twopicture">
                                 <div className="">
                                     <img src={ph8} className="img-responsive" alt="" />
                                 </div>
                             </div>
                             <div className="col-xs-4 twopicture">
                                 <div className="ph2">
                                     <img src={ph9} className="img-responsive" alt="" />
                                 </div>
                             </div>
                             <div className="col-xs-12 text-center gride" style={{padding:"0px"}}>
 
                                 <div className="col-xs-4">
                                     <div className="dimg">
                                         <span className=""><i className="fa fa-arrow-circle-down fa-2x"></i> </span><br />
                                         <span className="number">43412</span><br />
                                         <p>Download</p>
                                     </div>
 
                                 </div>
                                 <div className="col-xs-4 ">
                                     <div className="dimg">
                                         <span> <i className="fa fa-thumbs-o-up fa-2x"></i> </span><br />
                                         <span className="number">43412</span><br />
                                         <p>LIke</p>
                                     </div>
                                 </div>
                                 <div className="col-xs-4 ">
                                     <div className="dimg">
                                         <span> <i className="fa fa-star fa-2x "></i> </span><br />
                                         <span className="number">43412</span><br />
                                         <p className="star">5 star rating</p>
                                     </div>
                                 </div>
 
                             </div>
                         </div>
 
                     </div>
                     <div className="col-xs-12 col-sm-6 twopart2">
                         <div className="square">
                             <img src={ph10} className="img-responsive imgphone" alt="" />
                         </div>
                     </div>
                 </div>
             </div>
             <Footer />
         </div>
 
 
 
     )
            }
        }
    </cnt.Consumer>
    )

   
}
export default Index;