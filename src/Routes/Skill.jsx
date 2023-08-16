import SkillCard from "../skillmap/SkillCard";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="skill">
      <div className="skill-container">
        <div className="skill-box">
          <h4
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">SKILLS</h4>
          <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">My Skills</h1>
        </div>
        <SkillCard />
      </div>
    </div>
  );
};

export default Skill;
