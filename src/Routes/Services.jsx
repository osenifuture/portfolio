
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    Aos.init({ duration:1000});
  }, [])
  return (
    <div id="service">
      <h4>I AM GREAT AT</h4>
      <h3>I do awesome services for my clients</h3>
      <div className="service-container">
        <div data-aos="fade-down" className="service-box">
          <h3>WEB DESIGN</h3>
          <p> Creating visual and functional websites for online experiences.</p>
          <div className="service-circle">
          <i className="fa-solid fa-cubes"></i>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="service-box">
          <h3>WEB APPLICATION</h3>
       <p>Interactive online software accessible through web browsers.</p>
          <div className="service-circle">
          <i className="fa-solid fa-calculator"></i>
          </div>
        </div>
        <div data-aos="fade-down" className="service-box">
          <h3>WEB DEVELOPMENT</h3>
          <p>Building and maintaining websites and web applications.</p>
          <div className="service-circle">
          <i className="fa-solid fa-laptop-code"></i>
          </div>
        </div>
        <div data-aos="fade-down" className="service-box">
          <h3>INFORMATION TECH</h3>
          <p>  Managing and using technology for storing and transmitting
                information.</p>
          <div className="service-circle">
          <i className="fa-solid fa-network-wired"></i>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="service-box">
          <h3>POWER</h3>
          <p>Interconnected network transmitting and distributing electrical
                energy.</p>
          <div className="service-circle">
          <i className="fa-solid fa-wave-square"></i>
          </div>
        </div>
        <div data-aos="fade-down" className="service-box">
          <h3>TELECOMMUNICATION</h3>
          <p>Transmission of information over distance using electronic
                communication technologies.</p>
          <div className="service-circle">
          <i className="fa-solid fa-satellite"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
