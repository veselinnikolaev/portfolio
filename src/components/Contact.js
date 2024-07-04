import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="my-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="contact-method text-center">
              <FaEnvelope className="icon mb-3" size={40} />
              <h4>Email Me</h4>
              <p>For any inquiries or collaboration opportunities, feel free to send me an email.</p>
              <a href="mailto:vslnnikolaev@gmail.com" className="btn btn-primary mt-2">
                Send Email
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-method text-center">
              <FaLinkedin className="icon mb-3" size={40} />
              <h4>Connect on LinkedIn</h4>
              <p>Let's connect on LinkedIn and stay updated with my latest professional activities.</p>
              <a href="https://linkedin.com/in/veselin-nikolaev-070298296" className="btn btn-primary mt-2">
                Connect
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="contact-method text-center">
              <FaGithub className="icon mb-3" size={40} />
              <h4>GitHub Projects</h4>
              <p>Check out my latest projects and code contributions on GitHub.</p>
              <a href="https://github.com/veselinnikolaev" className="btn btn-primary mt-2">
                View GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <h3>Find Me</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.865451893573!2d27.92319541601464!3d43.21024397913862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4531031e17413%3A0x2be42d306b4a1f89!2sHigh%20School%20of%20Mathematics%2C%20Varna!5e0!3m2!1sen!2sbg!4v1629117314553!5m2!1sen!2sbg"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
