import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import './App.css';

function App() {

  const [projects] = useState([
    { name: "project 1", description: "Links to my project Repositories" },
    { name: "Project 2", description: "This Is a Project" },
    { name: "Project 3", description: "This Is a Project" },
    { name: "Project 4", description: "This Is a Project" },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);
  return (
    <div>
        <Nav
          projects={projects}
          setCurrentProject={setCurrentProject}
          currentProject={currentProject}
        ></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
