import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactForm from './pages/Contact';
import Resume from './pages/Resume';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function MainPage() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <ContactForm />;
        case 'Resume':
          return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <main>
        <Nav
          currentPage={currentPage} handlePageChange={handlePageChange}
        ></Nav>
        <div>{renderPage(currentPage)}</div>
        <footer className="container flex js">
          <div className="mt-5 border-top p-2">
              <a
                href="https://github.com/Thor40"
                className="m-2"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-kosik-17405a1a3/" className="m-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/thorkosik/"
                className="m-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
          </div>  
        </footer>
      </main>
  );
}

export default MainPage;