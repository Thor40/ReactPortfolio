import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import './App.css';

function App() {

  const [projects] = useState([
    { name: "project 1", description: "This Is a Project" },
    { name: "Project 2", description: "This Is a Project" },
    { name: "Project 3", description: "This Is a Project" },
    { name: "Project 4", description: "This Is a Project" },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [aboutSelected, setAboutSelected] = useState(false);
  return (
    <div>
        <Nav
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
        ></Nav>
      <main>
        {!aboutSelected ? (
          <>
          <Projects currentProject={currentProject}></Projects>
          <ContactForm></ContactForm>
          </>
        ) : (
          <About></About>
        )}
      </main>
    </div>
  );
}

export default App;
