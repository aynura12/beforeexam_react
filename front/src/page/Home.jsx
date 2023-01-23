import React from "react";
import Slider from "../components/Slider/Slider";
import "../style/home.css";
import image from "../media/img1.webp";
import image2 from "../media/jpg2.webp";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial/Testimonial";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div>
      
      <Slider/>
      <section className="inf_section">
        <div className="container inf_cards">
          <div className="row">
            <div className="col-4 inf_card">
              <i className="fa-regular fa-bell"></i>
              <h1>Modern Design</h1>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="col-4 inf_card">
              <i className="fa-regular fa-heart"></i>
              <h1>Build With Love</h1>
              <p>
                Even the all-powerful Pointing has no cont rol about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className="col-4 inf_card">
              <i className="fa-solid fa-bolt"></i>
              <h1>Fast Loading</h1>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="together_section">
        <div className="container">
          <div className="row">
            <div className="text col-6">
              <p>01 INFRASTRUCTURE</p>
              <h1>Let's Build Together</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
            <div className="col-6">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="open_section">
        <div className="container">
          <div className="row">
            <div className="img col-6">
              <img src={image2} alt="" />
            </div>
            <div className="text col-6">
              <p>01 INFRASTRUCTURE</p>
              <h1>Let's Build Together</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects_section">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus , soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
      </section>
      <section className="image-section">
        <div className="w-100">
          <div className="row g-0">
            <div className="col-4">
              <img
                src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="https://preview.colorlib.com/theme/hexa/images/img_2.jpg
                "
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="https://preview.colorlib.com/theme/hexa/images/img_3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="https://preview.colorlib.com/theme/hexa/images/img_4.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="https://preview.colorlib.com/theme/hexa/images/img_5.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="https://preview.colorlib.com/theme/hexa/images/img_6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="projects_section">
        <h1>Testimonial</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus , soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
      </section>
<Testimonial/>
      <section className="footer_top">
        <div className="container">
          <div className="blog_posts">
            <h1>BLOG POSTS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              unde impedit, necessitatibus , soluta sit quam minima expedita
              atque corrupti reiciendis.
            </p>
          </div>
          <div className="row">
            <div className="read col-6">
              <div className="footer_card">
                <img src="https://preview.colorlib.com/theme/hexa/images/img_1.jpg.webp" alt="" />
                <div>
                  <p>FEB 26TH, 2018</p>
                  <h5>Free Website Template at Free-Template.co</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsam minus ipsa earum nemo consectetur cupiditate
                    necessitatibus suscipit assumenda perspiciatis provident
                  </p>
                  <button>READ MORE</button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                <div className="footer_card">
                  <img src="	https://preview.colorlib.com/theme/hexa/images/img_2.jpg" alt="" />
                  <div>
                    <p>FEB 26TH, 2018</p>
                    <h5>Free Website Template at Free-Template.co</h5>
                   
                    <button>READ MORE</button>
                  </div>
                </div>
                 <div className="footer_card">
                  <img src="	https://preview.colorlib.com/theme/hexa/images/img_3.jpg" alt="" />
                  <div>
                    <p>FEB 26TH, 2018</p>
                    <h5>Free Website Template at Free-Template.co</h5>
                   
                    <button>READ MORE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
};

export default Home;
