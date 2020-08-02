import React from 'react';
import coverImage from '../../assets/images/image0.jpeg';

function About() {
    return (
        <section>
            <h1 id="about">It's Me!</h1>
            <img src={coverImage}
            className="my-2"
            style={{ width: "75%" }}
            alt="cover"
            />
        </section>
    );
}

export default About;