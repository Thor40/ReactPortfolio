import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactForm from './pages/Contact';
import Resume from './pages/Resume';
// add font awesome social media icons
// restyle projects page
// restyle contact form
// restyle most css
// update resume page
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
          <div>Social Media Icons</div>  
        </footer>
      </main>
  );
}

export default MainPage;