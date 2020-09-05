import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
// MAKE CONTACT A MODAL

function Nav(props) {

    const {
        currentPage
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage)});

      const tabs = ['About', 'Projects', 'Contact', 'Resume'];
    return (
        <header>
            <nav>
                <ul className='nav nav-fill'>
                    <h1>
                            Nicholas Kosik
                    </h1>
                    {tabs.map(tab => (
                        <li className="nav-item" key={tab}>
                            <a href={"#" + tab}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link' : 'nav-link active'
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