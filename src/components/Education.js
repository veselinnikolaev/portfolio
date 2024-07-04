import { FaSchool } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="my-5">
      <div className="container">
        <h2 className="text-center">Education</h2>
        <div className="education-item">
          <div className="education-header">
            <FaSchool style={{ fontSize: '2rem', marginRight: '10px' }} />
            <h3>High School of Mathematics "Dr Petar Beron"</h3>
          </div>
          <p className="education-duration">Software Engineer (09/2020 - 06/2024), Varna, Bulgaria</p>
          <p className="education-description">Specialized in Programming C#, MS SQL</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
