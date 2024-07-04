import { useEffect, useState } from 'react';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true); // Scrolling up
      } else {
        setVisible(false); // Scrolling down
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavItemClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <header 
      className={`navbar navbar-expand-lg navbar-dark bg-dark text-white sticky-top ${visible ? 'navbar-visible' : 'navbar-hidden'}`} 
      style={{ transition: 'top 0.3s' }}
    >
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
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
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
