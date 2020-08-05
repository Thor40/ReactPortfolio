import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// MAKE CONTACT A MODAL

function Nav(props) {

    const {
        projects = [],
        setCurrentProject,
        currentProject,
        handlePageChange,
        currentPage
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage)});

      const tabs = ['About', 'Projects', 'Contact'];
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
                    {tabs.map(tab => (
                        <li className="mx-2" key={tab}>
                            <a href={"#" + tab}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                            >
                                {tab}
                            </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;