import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../../utils/helpers';

function Projects() {

  return (
    <section>
      <div className="flex js">
      <h1>My Projects</h1>
      </div>
      <PhotoList/>
    </section>
  );
}
export default Projects;