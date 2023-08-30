import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
          <h1 data-aos="fade-up">About Me</h1>
          <p data-aos="zoom-in-right">
            Passionate front-end developer crafting immersive web experiences
            through clean code and creative design. Dedicated to blending
            aesthetics with functionality to deliver user-friendly interfaces.
            Always eager to learn and implement the latest technologies in the
            ever-evolving digital landscape.
          </p>
          <div className="address-box3">
            <h3 data-aos="fade-down" >
              Name: <span>Oseni Wasiu Adebayo</span>
            </h3>
            <h3 data-aos="fade-up" >
              Address: <span>40, Folawiyo Bankole Kilo Surulere Lagos.</span>
            </h3>
            <h3 data-aos="zoom-in-right">
              Email: <span>adebayomyhope@gmail.com</span>
            </h3>
            <h3 data-aos="zoom-in-left">
              Phone: <span>+2348062142972</span>
            </h3>
          </div>
          <div className="address-box4">
            <div data-aos="zoom-in-right" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <h3>Reading</h3>
            </div>
            <div data-aos="fade-up" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i class="fa-solid fa-plane-departure"></i>
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
            <div data-aos="zoom-in-left" className="box4-inner">
              <div className="hobby-box"></div>
              <div className="hobby-circle">
                <i class="fa-solid fa-baseball"></i>
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
