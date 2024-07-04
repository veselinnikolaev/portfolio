import { useEffect, useState } from 'react';

const Header = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // State to manage navbar collapse

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const navbarRect = navbar.getBoundingClientRect();
      setNavbarHeight(navbarRect.height);
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navbarHeight]);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed); // Toggle navbar collapse state
  };

  const handleNavItemClick = () => {
    setIsNavCollapsed(true); // Collapse navbar when a nav link is clicked
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="logo.png" alt="Profile" className="img-fluid rounded-circle header-image" />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed ? true : false} // Toggle aria-expanded attribute
          aria-label="Toggle navigation"
          onClick={handleNavCollapse} // Call handleNavCollapse function on click
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavItemClick}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavItemClick}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleNavItemClick}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={handleNavItemClick}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={handleNavItemClick}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavItemClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
