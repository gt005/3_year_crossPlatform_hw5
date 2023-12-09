import ProjectElement from './ProjectElement';

const ProjectsList = () => {
  const projects = [
    { src: "img/project-img.png", alt: "Гостиная с телевизором", description: "Современная гостиная" },
    { src: "img/project-1.png", alt: "Кухня с деревянной мебелью", description: "Уютная кухня" },
    { src: "img/project-2.png", alt: "Светлая гостиная", description: "Гостиная с окнами" },
    { src: "img/project-3.png", alt: "Ванная комната", description: "Минималистичная ванная" },
    { src: "img/project-4.png", alt: "Спальня с зеленой стеной", description: "Зеленая спальня" },
    { src: "img/project.png", alt: "Интерьер с комодом", description: "Комод и растения" },
  ];

  return (
    <div className="projects">
      <h2 className="projects__main-text">Проекты</h2>
      <div className="projects__examples-container grid-container">
        {projects.map((project, index) => (
          <ProjectElement
            key={index}
            imageSrc={project.src}
            altText={project.alt}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
