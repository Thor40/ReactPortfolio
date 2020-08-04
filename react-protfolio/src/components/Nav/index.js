import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// MAKE CONTACT A MODAL

function Nav(props) {

    const {
        projects = [],
        setCurrentProject,
        currentProject,
        setContactSelected,
        contactSelected
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
                <ul className='flex-row'>
                    <li className="mx-2"
                    onClick={() => setContactSelected(false)}>
                        <a href="#about">About Me</a>
                    </li>
                    <li className='mx-2'
                    onClick={() => setContactSelected(false)}>
                        <span>Projects</span>
                    </li>
                    <li className="mx-2"
                    onClick={() => setContactSelected(true)}>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;