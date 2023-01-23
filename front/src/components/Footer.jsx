import React from "react";
import "../components/footer.css";
const Footer = () => {
  return (
    <div>
      <section className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div>
                <h6>ABOUT THE HEXA TEMPLATE</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus et dolor blanditiis consequuntur ex voluptates
                  perspiciatis omnis unde minima expedita.
                </p>
                <div>
                  <ul className="contacts">
                    <li  className="contact">
                      {" "}
                      <a  href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li  className="contact">
                      {" "}
                      <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li  className="contact" >
                      <a  href="/">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="contact" >
                    
                      <a href="/">
                      
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div>
                <ul>
                  <li>
                    <h6>CONTACT INFO</h6>
                  </li>
                  <li>
                    <p>Address:</p>
                    <h6>34 Street Name, City Name Here, United States</h6>
                  </li>
                  <li>
                    <p>Telephone:</p>
                    <h6>+1 242 4942 290</h6>
                  </li>
                  <li>
                    <p>Email:</p>
                    <h6>info@yourdomain.com</h6>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              {" "}
              <div>
                <ul>
                  <li>
                    <h6>QUICK LINKS</h6>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Terms of Use</a>
                  </li>

                  <li>
                    <a href="/">Disclamiers</a>
                  </li>

                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom">
        <p>
          Copyright © 2023 All rights reserved | This template is made with by
        </p>
        <a href="/">Colorlib</a>
      </section>
    </div>
  );
};

export default Footer;
