
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="skill">
      <h4>SKILLS</h4>
      <h1>My Skills</h1>
      
      <div className="skill-container">
       <div className="skill-box1">
        <img src="https://i.ibb.co/MSGbk6k/html-removebg-preview-2-18-56-PM.png" alt="" />
        <h4>HTML</h4>
       </div>
       <div className="skill-box2">
        <img src="https://i.ibb.co/FWP1Ph4/CSS3-logo-svg-removebg-preview.png" alt="" />
        <h4>CSS</h4>
       </div>
       <div className="skill-box3">
        <img src="https://i.ibb.co/557NjCk/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png" alt="" />
        <h4>JAVASCRIPT</h4>
       </div>
       <div className="skill-box4">
        <img src="https://i.ibb.co/X4pdt7Y/react-removebg-preview.png" alt="" />
        <h4>REACT</h4>
       </div>
       <div className="skill-box6">
        <img src="https://i.ibb.co/BNFwFfG/png-transparent-github-git-hub-repository-social-icons-circular-color-icon-thumbnail-removebg-previe.png" alt="" />
        <h4>GITUP</h4>
       </div>
       <div className="skill-box5">
        <img src="https://i.ibb.co/MsCb5Qy/5847f40ecef1014c0b5e488a-removebg-preview.png" alt="" />
        <h4>FIREBASE</h4>
       </div>
      </div>
    </div>
  );
};

export default Skill;
