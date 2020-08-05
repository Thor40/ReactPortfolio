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
            <h2 id="about">Let Me Introduce Myself!</h2>
            </div>
                <div className="flex space-between">
                    <img src={coverImage}
                    className="my-2 flex"
                    style={selfStyle}
                    alt="A Picture of Me"
                    />
                    <p className="align-items">
                        This is a story all about how my life got flipped upside down
                    </p>
                </div>
        </section>
    );
}

export default About;