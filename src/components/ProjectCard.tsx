import React from "react";
import { useNavigate } from "react-router";
import "../styles/ProjectCard.css";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  id: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  };

  return (
    <div
      className="project-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
