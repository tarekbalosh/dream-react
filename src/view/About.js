import React , {useState} from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import  ph1 from '../images/Screen-Shot-2021-08-30-at-10.13 2.png';
import  ph2 from '../images/Profile Image-2.png';
import  ph3 from '../images/Profile Image.png';
 import ph4 from '../images/Profile Image-1.png'
import { cnt } from "../App";

const About = ()=>{
    

    return(
       
             <cnt.Consumer>
                 {
                     (re)=>{                                         
                         return(
                            <div class=""  style={{padding: "0px" }}>
          
 
                            <div className="col-xs-12 nabout" style={{padding: "0px"}}>
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
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                            
                      <div class="container abtop">
                          <div class="col-xs-12 col-sm-6">
                              <div class="ab2">
                                  <p class="lead">we care about <span class="you">you</span> </p>
                                  <p class="loremparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae,
                                      nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
                                      tempor, ac nunc libero urna, feugiat.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                                      nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                                      ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                                  </p>
                                  <div class="col-xs-12 more text-left" style={{paddingLeft:"0px"}}>
                                      <span class="m-auto">See More</span>
                                  </div>
                              </div>
                         </div>
                          <div class="col-xs-12 col-sm-6">
                               <div class="ab2">
                                   <div class="arrow">
                                   <span> <i className="fa fa-arrow-left" > </i> </span>
                                       <span><i className="fa fa-arrow-right" > </i></span>
                                   </div>
                                     <img src={ph1} class="img-responsive" alt=""/>
                               </div>
                          </div>
                      </div>
                  
                  
                  
                  
                      
                      <div class="container abtop">
                       
                          <div class="col-xs-12 col-sm-6">
                               <div class="ab2">
                                   <div class="arrow2">
                                      <span> <i className="fa fa-arrow-left" > </i> </span>
                                       <span><i className="fa fa-arrow-right" > </i></span>
                                   </div>
                                     <img  src={ph1} class="img-responsive img2" alt=""/>
                               </div>
                          </div>
                          <div class="col-xs-12 col-sm-6">
                              <div class="ab2">
                                  <p class="lead">we care about <span class="you">you</span> </p>
                                  <p class="loremparagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae,
                                      nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
                                      tempor, ac nunc libero urna, feugiat.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                                      nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                                      ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                                  </p>
                                  <div class="col-xs-12 more text-left" style={{paddingLeft:"0px"}}>
                                      <span class="m-auto">See More</span>
                                  </div>
                              </div>
                         </div>
                      </div>
                  
                  
                      <div class="container text-center phot">
                          <div class="col-xs-12">
                              <p class="lead"> DREAM MARKET Life team </p>
                              <p class="Lorem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est . </p>
                          </div>
                          <div class="col-xs-12 col-sm-4">
                             <div class="ph1">
                                    <img src={ph4} class="img-responsive img-circale" alt=""/>
                                    <h3>Craig Gouse</h3>
                                    <span>job title</span>
                                    <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                                    <div>
                                        <ul class="list-unstyled">
                                            <li> <i class="fa fa-facebook"></i> </li>
                                            <li> <i class="fa fa-instagram"></i> </li>
                                            <li> <i class="fa fa-twitter"></i> </li>
                                            <li> <i class="fa fa-youtube"></i> </li>
                                        </ul>
                                    </div>
                             </div>
                          </div>
                          <div class="col-xs-12 col-sm-4">
                             <div class="ph1">
                                    <img src={ph2} class="img-responsive img-circale" alt=""/>
                                    <h3>Craig Gouse</h3>
                                    <span>job title</span>
                                    <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                                    <div>
                                        <ul class="list-unstyled">
                                            <li> <i class="fa fa-facebook"></i> </li>
                                            <li> <i class="fa fa-instagram"></i> </li>
                                            <li> <i class="fa fa-twitter"></i> </li>
                                            <li> <i class="fa fa-youtube"></i> </li>
                                        </ul>
                                    </div>
                             </div>
                          </div>
                          <div class="col-xs-12 col-sm-4">
                             <div class="ph1">
                                    <img src={ph3} class="img-responsive img-circale" alt=""/>
                                    <h3 class="jocely">Jocelyn Septimus</h3>
                                    <span>job title</span>
                                    <p class="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                                    <div>
                                        <ul class="list-unstyled">
                                            <li> <i class="fa fa-facebook"></i> </li>
                                            <li> <i class="fa fa-instagram"></i> </li>
                                            <li> <i class="fa fa-twitter"></i> </li>
                                            <li> <i class="fa fa-youtube"></i> </li>
                                        </ul>
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
export default About;