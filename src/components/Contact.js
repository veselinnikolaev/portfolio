import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="my-5">
      <div className="container">
        <h2 className="text-center">Contact</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <p>
              <a href="mailto:vslnnikolaev@gmail.com">
                <FaEnvelope className="icon" />
              </a>
              <a href="tel:+359895566351">
                <FaPhone className="icon" />
              </a>
              <a href="https://linkedin.com/in/veselin-nikolaev-070298296">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://github.com/veselinnikolaev">
                <FaGithub className="icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
