import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { Fragment } from "react";
import Fade from "../slider/HomeSlider";
import HomeAutoType from "../slider/HomeAutoType";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
    <div id="home">
      <div className="home-container1">
        <div className="home-container2">
          <HomeAutoType/>
        </div>
        <div className="home-container3">
          <img data-aos="zoom-in"  src="https://i.ibb.co/TwhVbhF/What-is-the-MERN-stack-and-how-do-I-use-it-removebg-preview.png" alt="" />
        </div>
        <div className="home-mother">
          <Fade/>
        </div>
      </div>
    </div>
    {/* <div className="homeclient-con">
        <div data-aos="zoom-in-up"
      className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-briefcase"></i>
          </div>

          <div className="client-innerbox">
            <h2>20</h2>
            <h3>PROJECT COMPLETED</h3>
          </div>
        </div>

        <div data-aos="fade-down"
        className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-person-circle-check"></i>
          </div>

          <div className="client-innerbox">
            <h2>20</h2>
            <h3>HAPPY CLIENT</h3>
          </div>
        </div>

        <div data-aos="fade-up"
         className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-mug-hot"></i>
          </div>

          <div className="client-innerbox">
            <h2>15</h2>
            <h3>CUPS OF COFFEE</h3>
          </div>
        </div>

        <div data-aos="zoom-in-down"
       className="client-box">
          <div className="client-circle">
            <i class="fa-solid fa-calendar"></i>
          </div>

          <div className="client-innerbox">
            <h2>2</h2>
            <h3>YEARS EXPERIENCE</h3>
          </div>
        </div>
        
      </div>  */}
    </Fragment>
  );
};

export default Home;
