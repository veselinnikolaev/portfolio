import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <FaEnvelope className="mr-2" /> vslnnikolaev@gmail.com
              </li>
              <li>
                <FaPhone className="mr-2" /> +359 895 566 351
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a href="https://github.com/veselinnikolaev" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/veselin-nikolaev-070298296" target="_blank" rel="noopener noreferrer" className="text-white mr-3">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-white">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-white">Skills</a>
              </li>
              <li>
                <a href="#education" className="text-white">Education</a>
              </li>
              <li>
                <a href="#experience" className="text-white">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-white" />
        <p className="mb-0">&copy; 2024 Veselin Nikolaev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
