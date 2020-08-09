import React from 'react';

function PhotoList() {
    
    const projectData = [
        {
          id: 0,
          name: 'Run-Buddy',
          description: 'HTML, basic JavaScript, and CSS mock website',
          url: 'https://github.com/Thor40/run-buddy',
          img: '0.jpg'
        },
        {
          id: 1,
          name: 'Grocery booth',
          project: 'Project 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.amazon.com',
          img: '1.jpg'
        },
        {
          id: 2,
          name: 'Building exterior',
          project: 'Project 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.test.com',
          img: '2.jpg'
        },
        {
          id: 3,
          name: 'Restaurant table',
          project: 'Project 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          url: 'www.dictonary.com',
          img: '3.jpg'
        }
    ];

    return (
          <div className="container">
            <div className="row">
            {projectData.map((pData, i) => (
              <div className="col">
              <div className="card" style={ { width: "18rem" } }>
                <img src={`/assets/images/${pData.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
              <h5 className="card-title">{pData.name}</h5>
                  <p className="card-text">{pData.description}</p>
                  <a href={pData.url} className="btn btn-primary">GitHub</a>
                </div>
              </div>
              </div>
            ))}
            </div>
          </div>
      );
    };

export default PhotoList;