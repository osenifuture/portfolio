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
    </Fragment>
  );
};

export default Home;
