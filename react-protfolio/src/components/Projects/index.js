import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/pimg1.jpg";

function Projects() {

    const currentProject = {
        name: "project 1",
        description: "This is Project 1 Descript"
    };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div className="flex-row">
        <img
            src={photo}
            alt="Project Exmaple"
            className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Projects;