import { Fragment, useEffect } from "react";
import ProjectCard from "../project/ProjectCard";
import Responsive from "../slider/Slider";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div id="portfolio">
        <div className="portfolio-container">
          <div className="portfolio-box">
            <h4 data-aos="fade-down">ACCOMPLISHMENTS</h4>
            <h2 data-aos="fade-up">My recent woks</h2>
            <ProjectCard />
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <h4 data-aos="fade-down">TESTIMONIES</h4>
        <h1 data-aos="fade-up">What client says about?</h1>
        <Responsive />
      </div>
    </Fragment>
  );
};
export default Portfolio;
