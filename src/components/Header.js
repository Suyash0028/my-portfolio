import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine the active section based on scroll position
      // This is just a simplified example, you may need to adjust it based on your specific layout and requirements
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      setActiveLink(currentSection);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  const navLinks = [
    {
      linkName: "Home",
      route: "home"
    },
    {
      linkName: "About",
      route: "about"
    },
    {
      linkName: "Projects",
      route: "projects"
    },
    {
      linkName: "Contact",
      route: "contact"
    }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontFamily: 'Inconsolata, monospace' }}>Suyash.dev</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className={'nav-item'}>
                <Link
                  to={link.route}
                  activeClass={"text-white bg-blue-500"}
                  spy={true}
                  smooth={true}
                  style={{textDecoration: "none"}}>
                  <span className="nav-link me-4" style={{ backgroundColor: activeLink === link.route ? 'rgb(59, 130, 246, 1)' : 'transparent', color: activeLink === link.route ? 'white' : 'black', borderRadius: '0.375rem', cursor:"pointer" }}>{link.linkName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
