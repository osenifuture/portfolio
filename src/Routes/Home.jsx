import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Fade from "../slider/HomeSlider";
import { Fragment } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
    <div id="home">
      <div className="home-container1">
        <div className="home-container2"></div>
        <div className="home-container3">
          <img  data-aos="zoom-in" src="  https://i.ibb.co/wN76pRp/pexels-ultra-3911274-removebg-preview-1.png" alt="" />
        </div>
        <div className="home-image">
        <Fade/>
        </div>
      </div>
    </div>
    <div className="homeclient-con">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-briefcase"></i>
          </div>

          <div className="client-innerbox">
            <h2>20</h2>
            <h3>PROJECT COMPLETED</h3>
          </div>
        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-person-circle-check"></i>
          </div>

          <div className="client-innerbox">
            <h2>20</h2>
            <h3>HAPPY CLIENT</h3>
          </div>
        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-mug-hot"></i>
          </div>

          <div className="client-innerbox">
            <h2>15</h2>
            <h3>CUPS OF COFFEE</h3>
          </div>
        </div>

        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-calendar"></i>
          </div>

          <div className="client-innerbox">
            <h2>2</h2>
            <h3>YEARS EXPERIENCE</h3>
          </div>
        </div>
        
      </div> 
    </Fragment>
  );
};

export default Home;
