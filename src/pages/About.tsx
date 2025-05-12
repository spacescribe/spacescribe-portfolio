import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate();

  const handleViewProjectsClick = () => {
    navigate("/projects");
  };

  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          I’m a passionate developer with a strong interest in cloud computing,
          full-stack development, and modern web technologies. I love building
          intuitive, responsive web applications and solving real-world problems
          through code.
        </p>
        <p>
          This portfolio showcases some of the projects I’ve worked on. Each one
          reflects my enthusiasm for learning and continuous improvement.
        </p>

        <div className="contact-details">
          <h3>Feel free to reach me:</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/nandini-choukimath/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/spacescribe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-button">
          <button className="project-btn" onClick={handleViewProjectsClick}>
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
