import React from "react";
import SkillMap from "./SkillMap";

const SkillCard = () => {
    return (
        <div className="skill-card">
            {SkillMap.map((skill) => {
                const { id, title, imageUrl } = skill; 
                return (
                    <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" key={id} className="skill-info">
                        <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">{title}</h2>
                        <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={imageUrl} alt={title} />
                        <div className="display-on-hover">
                            <h2>SOFTWARE DEVELOPMENT</h2> 
                            <p>My Favourite Work</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SkillCard;
