import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div class="container divcontact">
      <div class="col-xs-12 bgfotter">
        <div class="">
          <div class="col-xs-6 col-sm-4 text-left">
            <div class="lower">
              <span class="contactuse flotuse">Contact Use</span>
              <br />
              <div class="liner text-center"></div>
              <p class="lor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>
          </div>
          <div class="col-xs-6 col-sm-2 text-left">
            <div class="lower">
              <span class="contactuse">Useful links</span>
              <br />
              <div class="liner text-center"></div>
              <ul class="list-unstyled  nav-link1">
                <li className="nav-link">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Gategories">Gategories</NavLink>
                </li>
                <li className="">
                  <a className="">Download tha app</a>
                </li>

                <li className="nav-link">
                  <NavLink to="/About">About</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xs-6 col-sm-2 text-left">
            <div class="lower">
              <span class="contactuse">Follow Us Now </span>
              <br />
              <div class="liner text-center"></div>
              <div class="icons">
                <span class="icon1">
                  <i class="fa fa-facebook"></i>{" "}
                </span>
                <span class="icon2 youtube">
                  <i class="fa fa-youtube"></i>{" "}
                </span>
                <br />
                <span class="icon1">
                  <i class="fa fa-twitter"></i>{" "}
                </span>
                <span class="icon2 insta">
                  <i class="fa fa-instagram"></i>{" "}
                </span>
              </div>
            </div>
          </div>
          <div class="col-xs-6 col-sm-4 text-left">
            <div class="lower">
              <span class="contactuse">Get Directions</span>
              <br />
              <div class="liner text-center"></div>

              <div id="map" class="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
                  width="100%"
                  height="200px"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="text-center soft">
            <p> All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
