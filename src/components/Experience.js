import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="my-5">
      <div className="container">
        <h2 className="text-center">Work Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <FaBriefcase style={{ fontSize: '2rem', marginRight: '10px' }} />
            <h3>Java Developer at Freelance</h3>
          </div>
          <p className="experience-duration">(05/2024 - Present)</p>
          <p className="experience-description">Developed a Discord Bot for a Gaming Server</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
