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
        <a
          key={project.id}
          href={getLink(project.id)}
          className="project-info"
          target="_blank"
          rel="noreferrer"
        >
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
      case "1":
        return "https://agoaweb.vercel.app/";
      case "2":
        return "https://yummytasty.vercel.app/";
      case "3":
        return "https://olymaxsolution.vercel.app/";
      case "4":
        return "https://cinexflix.vercel.app/";
      case "5":
        return "https://deluxury.vercel.app/";
        case "6":
          return "https://hejitechweb.vercel.app/";
          case "7":
            return "https://todoapp-chi-one.vercel.app/";
      default:
        return "/";
    }
  }
};

export default ProjectCard;
