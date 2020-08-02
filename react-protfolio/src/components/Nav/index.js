import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    const {
        projects = [],
        setCurrentProject,
        currentProject
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentProject.name);
      }, [currentProject]);

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
                    <li className='mx-1 navActive'>
                        <a data-testid="mx-2"
                        href="#projects">
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