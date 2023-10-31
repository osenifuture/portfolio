
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="skill">
      <h4 data-aos="fade-down">STACKS</h4>
      <h1 data-aos="fade-up">Technologies i have work with</h1>
      
      <div data-aos="fade-down"  className="skill-container">
       <div className="skill-box1">
        <div className="skill-card">
        <img data-aos="fade-up" src="https://i.ibb.co/MSGbk6k/html-removebg-preview-2-18-56-PM.png" alt="" />
        <h4 data-aos="fade-down">HTML</h4>
        </div>
       </div>
       <div className="skill-box2">
        <div className="skill-card">
        <img data-aos="fade-up" src="https://i.ibb.co/FWP1Ph4/CSS3-logo-svg-removebg-preview.png" alt="" />
        <h4 data-aos="fade-down">CSS</h4>
        </div>
       </div>
       <div className="skill-box3">
        <div className="skill-card">
        <img  data-aos="fade-down" src="https://i.ibb.co/557NjCk/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png" alt="" />
        <h4 data-aos="fade-up">JAVASCRIPT</h4>
        </div>
       </div>
       <div className="skill-box4">
        <div className="skill-card">
        <img  data-aos="fade-down" src="https://i.ibb.co/X4pdt7Y/react-removebg-preview.png" alt="" />
        <h4 data-aos="fade-up">REACT</h4>
        </div>
       </div>
       <div className="skill-box6">
        <div className="skill-card">
        <img src="https://i.ibb.co/KxQNK10/images-2.png" alt="" />
        <h4 data-aos="fade-down">GITUP</h4>
        </div>
       </div>
       <div className="skill-box5">
        <div className="skill-card">
        <img  data-aos="zoom-in-up" src="https://i.ibb.co/MsCb5Qy/5847f40ecef1014c0b5e488a-removebg-preview.png" alt="" />
        <h4 data-aos="fade-down">FIREBASE</h4>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Skill;
