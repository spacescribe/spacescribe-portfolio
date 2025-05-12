import React from "react";
import { useParams } from "react-router";
import { projectData } from "../data/projectData";
import "../styles/ProjectDetails.css";

const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg}", {
  eager: true,
  as: "url",
});

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return <div className="not-found">Project not found</div>;
  }

  const imagePath = `../assets/images/${project.image}`;
  const image = images[imagePath];

  return (
    <div className="details-container">
      <h1>{project.title}</h1>
      <img src={image} alt={project.title} className="details-image" />
      <p className="details-description">{project.description}</p>

      {/* Tech Stack */}
      {project.techStack && (
  <div className="details-section">
    <h3>Tech Stack:</h3>
    <div className="tech-stack-line">
      {project.techStack.join(" | ")}
    </div>
  </div>
)}

{/* Highlights */}
{project.highlights && (
  <div className="details-section">
    <h3>What I Did:</h3>
    <ul className="highlights-text">
      {project.highlights.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
)}

      {/* GitHub Repo */}
      {project.link && (
        <div className="details-section">
          <h3>Link:</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            {project.title}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
