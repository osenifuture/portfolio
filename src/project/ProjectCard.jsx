
import ProjectFile from "./ProjectFile";
import React from "react";


const ProjectCard = () => {
    return(
        <div className="project-container">
            {
                ProjectFile.map((project) => {
                    const {id, imageUrl, title} = project;
                    return(
                        <div data-aos="zoom-in-up"
                        key={id} className="project-info">
                            <img src={imageUrl} alt="" />
                            <h4 data-aos="fade-down"
                        >{title}</h4>
                        </div>
                    )
                })
            }
            
        </div>
    )
};

export default ProjectCard;