const skills = [
  { name: 'Java Spring Framework', proficiency: 80 },
  { name: 'Object-Oriented Programming', proficiency: 90 },
  { name: 'Database', proficiency: 75 },
  { name: 'Coding Standards', proficiency: 85 },
  { name: 'Testing', proficiency: 70 },
  { name: 'Git & GitHub', proficiency: 85 },
  { name: 'Problem Solving', proficiency: 85 },
  { name: 'Teamwork', proficiency: 80 }
];

const Skills = () => {
  return (
    <section id="skills" className="my-5">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="skill-item">
                <h4>{skill.name}</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.proficiency}%` }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.proficiency}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
