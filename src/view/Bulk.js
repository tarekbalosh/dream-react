import React , {useState} from "react";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import ph1 from '../images/24759.png';
import { cnt } from "../App";

const Bulk = () => {
      return(
        <cnt.Consumer>
        {
            (re)=>{
                return(
                  <div class="">
                  <div className="col-xs-12" style={{ padding: "0px" }}>
                      <div className="col-xs-12 text-center imgback bacBulk img-responsive" style={{ padding: "0px" }}>
      
      
      
                          <nav className="navbar navbar2 " role="navigation" >
                              <div className="text-center container">
                                  <div className="navbar-header navbar-header2">
      
      
                                      <button type="button" className="navbar-toggle navbar-toggle2" data-target="#nav2"
                                          data-toggle="collapse" onClick={()=> re.show('.sho')}>
                                          <i className="fa fa-bars "></i>
                                      </button>
      
                                  </div>
                                  <div className= 'sho collapse navbar-collapse' id="nav2">
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
                                              <Link to="/Bulk" className="active">
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
                  
          <div class="container ">
              <div class="col-xs-12 text-center bulkprod Bulkn">
                   <p class="broduc"> Bulknuts Products </p>
                   <p class="ipsm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.green modern living room</p>
              </div>
             
              <div class="col-xs-12">
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <p class="productName1 text-center">Product Name</p>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <p class="productName1 text-center">Product Name</p>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <p class="productName1 text-center">Product Name</p>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
                      </div>
      
                  </div>
                  <div class="col-xs-12 col-sm-3 layout">
                      <div class="border">
                          <div class="img2475">
                              <img class="img-responsive" src={ph1} alt=""/>
                          </div>
                          <div class="divproductname text-center">
                              <span class="productName text-center">long Product</span><br/>
                              <span class="productName text-center"> Name Here</span>
                          </div>
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
export default Bulk;