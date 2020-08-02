import React from 'react';

function Nav() {

    const projects = [
        {
          name: "projects",
          description:
            "Links to my project Repositories",
        },
        { name: "Project 1", description: "This Is a Project" },
        { name: "Project 2", description: "This Is a Project" },
        { name: "Project 2", description: "This Is a Project" },
      ];


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link"
                href="/">
                    Nicholas Kosik
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about"
                        href="#about">
                        About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;