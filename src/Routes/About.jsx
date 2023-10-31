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
        <div data-aos="zoom-in" className="about-box1"></div>
        <div className="about-box2">
          <h4 data-aos="fade-down">MY INTRO</h4>
          <AboutAutoType/>
          <p data-aos="zoom-in-up">
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
            <i className="fa-solid fa-house"></i> <span>40, Folawiyo Bankole Kilo Surulere Lagos.</span>
            </h3>
            <h3 data-aos="zoom-in-up">
            <i className="fa-solid fa-envelope"></i> <a href="mailto:" target="blank">osenimyfutureplan2021@gmail.com</a>
            </h3>
            <h3 data-aos="zoom-in-down">
            <i className="fa-solid fa-phone"></i> <a href="tel:+2348062142972">+2348062142972-09133950696</a>
            </h3>
          </div>
          <div className="address-box4">
            <div data-aos="zoom-in-up" className="box4-inner">
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
