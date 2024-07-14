import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="bg-light py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 mb-4">Welcome to my Portfolio</h1>
            <p className="lead" style={{ fontSize: '1rem' }}>
              My name is Veselin Nikolaev, and I am a dedicated Java Developer passionate about crafting innovative solutions and building robust web applications. With a strong foundation in object-oriented principles and design patterns, I excel in creating software that meets both functional and performance objectives.
            </p>
            <div className="mb-4 d-flex justify-content-around">
              <a href="https://github.com/veselinnikolaev" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaGithub className="mr-1" /> GitHub
              </a>
              <a href="https://linkedin.com/in/veselin-nikolaev-070298296" target="_blank" rel="noopener noreferrer" className="btn btn-info">
                <FaLinkedin className="mr-1" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
