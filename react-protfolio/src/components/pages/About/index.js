import React from 'react';
import coverImage from '../../../assets/images/image0.jpeg';

function About() {
    const selfStyle ={
        width: "50%",
        position: "center"
    }
    return (
        <section>
            <div className="flex js">
            <h2 id="about">Howdy</h2>
            </div>
                <div className="flex space-between">
                    <img src={coverImage}
                    className="my-2 flex"
                    style={selfStyle}
                    alt="Nicholas Kosik"
                    />
                    <p className="align-items">
                        Full-Stack Programmer looking for the next project. 
                    </p>
                </div>
        </section>
    );
}

export default About;