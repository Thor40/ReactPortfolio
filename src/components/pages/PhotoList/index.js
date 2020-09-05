import React from 'react';
import img from '../../../../src/assets/images/code.jpg'

function PhotoList() {
    
    const projectData = [
        {
          id: 0,
          name: 'Run-Buddy',
          description: 'HTML, basic JavaScript, and CSS mock website',
          url: 'https://github.com/Thor40/run-buddy',
          img: '../../../../assets/images/0.jpg'
        },
        {
          id: 1,
          name: 'Nutrifinder',
          description: 'JavaScript web app using a third party API to allow user to keyword-search for foods, nutrition facts, and recipes.',
          url: 'https://github.com/durcoorigin/nutrifinder',
          img: '1.jpg'
        },
        {
          id: 2,
          name: 'The Informed Artist',
          description: 'JavaScript web app using MySQL2 and Sequelize to allow users to upload images in this art sharing platform',
          url: 'https://github.com/roxyvaught/The-Informed-Artist',
          img: 'src/assets/images/2.png'
        },
        {
          id: 3,
          name: 'Help Exchange',
          description: 'Using MERN stack with MongoDB and Mongoose, and GraphQL, this social media volunteer app allows users to request for help or for volunteering to help.',
          url: 'https://rocky-retreat-38962.herokuapp.com/',
          img: 'src/assets/images/3.jpg'
        }
    ];

    return (
          <div className="container">
            <div className="row">
            {projectData.map((pData, i) => (
              <div className="col" key={pData.id}>
              <div className="card m-1" style={ { width: "30rem" } }>
                <img src={img} className="card-img-top" alt="..." />
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