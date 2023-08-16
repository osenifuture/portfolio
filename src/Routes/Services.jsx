
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Services = () => {
  useEffect(() => {
    Aos.init({ duration:1000});
  }, [])
  return (
    <div id="service">
      <div className="service-container">
        <div className="service-box1">
          <h4 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">I AM GREATE AT </h4>
          <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">I do awesome services for my clients</h1>
        </div>
        <div className="service-box2">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="servbox2-inner">
            <div className="service-inner">
              <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">WEB DESIGN</h3>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                Creating visual and functional websites for online experiences.
              </p>
            </div>
            <div className="service-circle">
              <i class="fa-solid fa-cubes"></i>
            </div>
          </div>
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="servbox2-inner">
            <div className="service-inner">
              <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">WEB APPLICATION</h3>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                Interactive online software accessible through web browsers.
              </p>
            </div>
            <div className="service-circle">
              <i class="fa-solid fa-calculator"></i>
            </div>
          </div>
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="servbox2-inner">
            <div className="service-inner">
              <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">WEB DEVELOPMENT</h3>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Building and maintaining websites and web applications.</p>
            </div>
            <div className="service-circle">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
          </div>
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="servbox2-inner">
            <div className="service-inner">
              <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">INFORMATION TECH</h3>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                Managing and using technology for storing and transmitting
                information.
              </p>
            </div>
            <div className="service-circle">
              <i class="fa-solid fa-network-wired"></i>
            </div>
          </div>
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="servbox2-inner">
            <div className="service-inner">
              <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">POWER</h3>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                Interconnected network transmitting and distributing electrical
                energy.
              </p>
            </div>
            <div className="service-circle">
              <i class="fa-solid fa-wave-square"></i>
            </div>
          </div>
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="servbox2-inner">
            <div className="service-inner">
              <h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">TELCOM</h3>
              <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                Transmission of information over distance using electronic
                communication technologies.
              </p>
            </div>
            <div className="service-circle">
              <i class="fa-solid fa-satellite"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
