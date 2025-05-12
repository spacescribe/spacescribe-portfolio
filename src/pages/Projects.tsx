import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";
import "../styles/Projects.css";

const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg}", {
  eager: true,
  as: "url",
});

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My projects</h1>
      <div className="projects-grid">
        {Object.keys(projectData).map((projKey) => {
          const proj = projectData[projKey as keyof typeof projectData];
          const imagePath = `../assets/images/${proj.image}`;
          const image = images[imagePath];

          return (
            <ProjectCard
              key={projKey}
              id={projKey}
              title={proj.title}
              description={proj.description}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
