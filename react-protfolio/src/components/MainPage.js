import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactForm from './pages/Contact';

function MainPage() {

  const [projects] = useState([
    { name: "My Projects", description: "Click a Project to get started!" }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />;
    }
  };
  return (
    <main>
        <Nav
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
          currentPage={currentPage} handlePageChange={handlePageChange}
        ></Nav>
        <div>{renderPage(currentPage)}</div>
        <div className="container">Social Media Icons</div>
      </main>
  );
}

export default MainPage;