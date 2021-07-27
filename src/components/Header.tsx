import React from 'react';

import '../../public/assets/scss/components/header.scss';

import Logo from '../../public/assets/img/logos/header.png';

/**
 * The header of the website.
 */
class Header extends React.Component {
    render = () => {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand">
                            <img src={Logo} alt="StatPixel favicon" className="header-logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="/about" className={`nav-link ${window.location.pathname === `/about` ? `active disabled` : ``}`}>About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
