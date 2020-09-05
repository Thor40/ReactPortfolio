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
          name: 'Nutrifinder',
          description: 'JavaScript web app using a third party API to allow user to keyword-search for foods, nutrition facts, and recipes.',
          url: 'https://github.com/durcoorigin/nutrifinder',
          img: 'nutrifinder.jpg'
        },
        {
          id: 2,
          name: 'The Informed Artist',
          description: 'JavaScript web app using MySQL2 and Sequelize to allow users to upload images in this art sharing platform',
          url: 'https://github.com/roxyvaught/The-Informed-Artist',
          img: 'TIA.png'
        },
        {
          id: 3,
          name: 'Help Exchange',
          description: 'Using MERN stack with MongoDB and Mongoose, and GraphQL, this social media volunteer app allows users to request for help or for volunteering to help.',
          url: 'https://rocky-retreat-38962.herokuapp.com/',
          img: 'code.jpg'
        }
    ];

    return (
          <div className="container">
            <div className="row">
            {projectData.map((pData, i) => (
              <div className="col">
              <div className="card m-1" style={ { width: "30rem" } }>
                <img src={`/assets/images/${pData.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
              <h3 className="card-title">{pData.name}</h3>
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