import React, { useState } from 'react';

function PhotoList({ projects }) {
    
    const [photos] = useState([
        {
          id: 0,
          name: 'Run-Buddy',
          description: 'HTML, basic JavaScript, and CSS mock website',
          url: 'https://github.com/Thor40/run-buddy'
        },
        {
          id: 1,
          name: 'Grocery booth',
          project: 'Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.amazon.com'
        },
        {
          id: 2,
          name: 'Building exterior',
          project: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.test.com'
        },
        {
          id: 3,
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
            {photos.map((image, i) => (
              <img
                src={require(`../../../assets/images/${i}.jpg`)}
                alt={currentPhotos.name}
                className="img-thumbnail mx-1"
                onClick={() => window.location.href=`${image.url}`}
                key={i}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
            ))}
            {isShown && (
                <div>hello</div>
              )}
          </div>
        </div>
      );
    };

export default PhotoList;