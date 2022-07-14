import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './index.css';

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to='/'>Movie</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to='/'>Create Movie</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/movielist'>Movie List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
