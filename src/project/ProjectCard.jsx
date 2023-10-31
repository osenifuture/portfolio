
import ProjectFile from "./ProjectFile";
import React from "react";


const ProjectCard = () => {
    // return(
    //     <div className="project-container">
    //         {
    //             ProjectFile.map((project) => {
    //                 const {id, imageUrl, title} = project;
    //                 return(
    //                     <div data-aos="zoom-in-up"
    //                     key={id} className="project-info">
    //                         <img src={imageUrl} alt="" />
    //                         <h4 data-aos="fade-down"
    //                     >{title}</h4>
    //                     </div>
    //                 )
    //             })
    //         }
            
    //     </div>
    // )

    return (
        <div className="project-container">
          {ProjectFile.map((project) => (
            <a key={project.id} href={getLink(project.id)} className="project-info" target="_blank">
              <div className="card-info">
                <img src={project.imageUrl} alt="" />
                <p>{project.title}</p>
              </div>
            </a>
          ))}
        </div>
      );

      function getLink(id) {
        switch (id) {
          case '1':
            return 'https://agoapowersmile.onrender.com/';
          case '2':
            return '/link-for-item-2';
          case '3':
            return 'https://easypay-oqym.onrender.com/';
          case '4':
            return '/link-for-item-4';
          case '5':
            return '/link-for-item-5';
          case '6':
            return '/link-for-item-6';
          default:
            return '/';
        }
      }
};

export default ProjectCard;