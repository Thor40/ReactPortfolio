import React, { useState } from 'react';

function PhotoList({ projects }) {
    
    const [photos] = useState([
        {
          name: 'Grocery aisle',
          project: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Grocery booth',
          project: 'Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          project: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          project: 'Project 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.projects === projects);

    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <img
                src={require(`../../../assets/images/${i}.jpg`)}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            ))}
          </div>
        </div>
      );
    };

export default PhotoList;