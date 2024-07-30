import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutAutoType from "../slider/AboutAutoType";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="about">
      <div className="about-container">
        <div  className="about-box1">
        <div data-aos="zoom-in-up" className="profile-card">
        <div className="profile-image"></div>
        </div>
        <div className="profile-skill">
        <div data-aos="fade-down" className="wrapper">
      <span>
      <h3>HTML</h3>
      <p>99%</p>
      </span>
         <div className="range-1">
          <div className="inner-1"></div>
         </div>
        </div>
        <div data-aos="fade-up" className="wrapper">
      <span>
      <h3>CSS</h3>
      <p>95%</p>
      </span>
         <div className="range-1">
          <div className="inner-2"></div>
         </div>
        </div>
        <div data-aos="fade-down"  className="wrapper">
      <span>
      <h3>JAVASCRIPT</h3>
      <p>90%</p>
      </span>
         <div className="range-1">
          <div className="inner-3"></div>
         </div>
        </div>
        <div data-aos="fade-up" className="wrapper">
      <span>
      <h3>REACT</h3>
      <p>90%</p>
      </span>
         <div className="range-1">
          <div className="inner-4"></div>
         </div>
        </div>
        <div data-aos="fade-down" className="wrapper">
      <span>
      <h3>GITUP</h3>
      <p>95%</p>
      </span>
         <div className="range-1">
          <div className="inner-2"></div>
         </div>
        </div>
        <div data-aos="fade-up" className="wrapper">
      <span>
      <h3>FIREBASE</h3>
      <p>55%</p>
      </span>
         <div className="range-1">
          <div className="inner-6"></div>
         </div>
        </div>
        </div>
        </div>
        <div className="about-box2">
          <h4 data-aos="fade-down">MY INTRO</h4>
          <AboutAutoType/>
          <p data-aos="fade-up">
            Passionate front-end developer crafting immersive web experiences
            through clean code and creative design. Dedicated to blending
            aesthetics with functionality to deliver user-friendly interfaces.
            Always eager to learn and implement the latest technologies in the
            ever-evolving digital landscape.
          </p>
          <div className="address-box3">
            <h3 data-aos="fade-down" >
            <i className="fa-solid fa-user"></i> <span>Oseni Wasiu Adebayo</span>
            </h3>
            <h3 data-aos="fade-up" >
            <i className="fa-solid fa-house"></i> <span>40, Folawiyo Bankole Surulere Lagos.</span>
            </h3>
            <h3 data-aos="fade-down">
            <i className="fa-solid fa-envelope"></i> <a href="mailto:" target="blank">osenimyfutureplan2021@gmail.com</a>
            </h3>
            <h3 data-aos="fade-up">
            <i className="fa-solid fa-phone"></i> <a href="tel:+2348062142972">+2348062142972 , 09133950696</a>
            </h3>
          </div>
          <div className="address-box4">
            <div data-aos="fade-down" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i className="fa-solid fa-book-open-reader"></i>
              </div>
              <h3>Reading</h3>
            </div>
            <div data-aos="fade-up" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i className="fa-solid fa-plane-departure"></i>
              </div>
              <h3>Travelling</h3>
            </div>
            <div data-aos="fade-down" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <h3>Movies</h3>
            </div>
            <div data-aos="zoom-in-down" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i className="fa-solid fa-baseball"></i>
              </div>
              <h3>Sports</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
