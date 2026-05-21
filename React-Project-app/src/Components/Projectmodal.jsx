function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <h2>{project.name}</h2>

        <img src={project.image} alt={project.name} />

        <p>{project.description}</p>

        <p><strong>Tech:</strong> {project.tech}</p>

        <a href={project.repo} target="_blank" rel="noreferrer">
          GitHub Repo
        </a>

        <button className="close-button" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default ProjectModal;