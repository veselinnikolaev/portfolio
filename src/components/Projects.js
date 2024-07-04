import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  { name: 'Darts', description: 'REST, Front-End, JSON Processing, Validation', date: '04/2024 - 06/2024', primaryLanguage: 'JavaScript' },
  { name: 'FFF', description: 'Database Migration MS SQL, Entity Framework Core, ASP.NET, Validation', date: '03/2024 - 06/2024', primaryLanguage: 'C#' },
  { name: 'MyMovieApp', description: 'Advanced Spring, Cloud Services, Mail Sending, Integration & Unit Testing', date: '11/2023 - 01/2024', primaryLanguage: 'Java' },
  { name: 'DictionaryApp', description: 'Basic Spring, Security, HTTP, Thymeleaf', date: '10/2023 - 10/2023', primaryLanguage: 'Java' },
  { name: 'Find-a-Star', description: 'XML Processing, JSON Processing, Spring Data, Database Migration MySQL', date: '06/2023 - 06/2023', primaryLanguage: 'Java' },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1); // Collapse if clicked again
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section id="projects" className="my-5">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index} className={`project-item ${expandedIndex === index ? 'expanded' : ''}`}>
              <div className="project-header" onClick={() => toggleExpand(index)}>
                <h3>{project.name}</h3>
                <div className="language-info">
                <div className={`language-point ${getLanguageColor(project.primaryLanguage)}`}></div>
                  <p>{project.primaryLanguage}</p>
                </div>
              </div>
              <div className={`project-details ${expandedIndex === index ? 'expanded' : ''}`}>
                <p>{project.description}</p>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between'}}>
                  <p>{project.date}</p>
                  <a href={`https://github.com/veselinnikolaev/${project.name}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ fontSize: '2rem' }}  />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const getLanguageColor = (language) => {
  switch (language.toLowerCase()) {
    case 'javascript':
      return 'yellow';
    case 'c#':
      return 'blue';
    case 'java':
      return 'brown';
    default:
      return 'default';
  }
};

export default Projects;
