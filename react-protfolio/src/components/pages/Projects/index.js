import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../../utils/helpers';

function Projects({ currentProject }) {
    const { name, description } = currentProject;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList project={currentProject.name}/>
    </section>
  );
}
export default Projects;