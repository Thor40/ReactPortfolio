import React, { useState } from 'react';

function PhotoList({ projects }) {
    
    const [photos] = useState([
        {
          name: 'Run-Buddy',
          project: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.google.com'
        },
        {
          name: 'Grocery booth',
          project: 'Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.amazon.com'
        },
        {
          name: 'Building exterior',
          project: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.test.com'
        },
        {
          name: 'Restaurant table',
          project: 'Project 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.dictonary.com'
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.projects === projects);

    const [isShown, setIsShown] = useState(false);

    return (
        <div>
          <div className="flex-row">
            {currentPhotos.map((image, i) => (
              <a href={image.url}>
              <img
                src={require(`../../../assets/images/${i}.jpg`)}
                alt={photos.name}
                className="img-thumbnail mx-1"
                a href={photos.url}
                key={photos.name}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
              </a>
            ))}{isShown && (
              currentPhotos.name
            )}
          </div>
        </div>
      );
    };

export default PhotoList;