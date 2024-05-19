import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src="./logotype4.png" height={100} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className='nav-link me-4' to="/">Mon Entreprise</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle me-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mes Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/massage">Bien-Être</a></li>
                                        <li><a className="dropdown-item" href="/lahochi">Soin Lahochi</a></li>
                                        <li><a className="dropdown-item" href="/magnetisme">Magnétisme</a></li>
                                        <li><a className="dropdown-item" href="/cartomancie">Cartomancie</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
