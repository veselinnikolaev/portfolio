import { FaJava, FaDatabase, FaLaptopCode, FaRegSmile } from 'react-icons/fa';
import profileImage from '../images/profile.png'; // Ensure you have a profile image in your images folder

const About = () => {
  return (
    <section id="about" className="my-5">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <div className="about-content">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="about-text">
            <p>
              Passionate and driven Java Developer with a solid understanding of object-oriented principles and design patterns. Base knowledge of database normalization and SQL queries. Experienced in developing web applications. Aim to create optimized software solutions.
            </p>
            <div className="skills">
              <div className="skill">
                <FaJava style={{ fontSize: '2rem', color: '#007396' }} />
                <p>Java</p>
              </div>
              <div className="skill">
                <FaDatabase style={{ fontSize: '2rem', color: '#f29111' }} />
                <p>SQL</p>
              </div>
              <div className="skill">
                <FaLaptopCode style={{ fontSize: '2rem', color: '#007bff' }} />
                <p>Web Development</p>
              </div>
              <div className="skill">
                <FaRegSmile style={{ fontSize: '2rem', color: '#ff9900' }} />
                <p>Optimized Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
