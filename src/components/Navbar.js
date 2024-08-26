import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.themeMode.toLowerCase()}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.textColor}`} href="/">Text Utils</a>
                    <button className="navbar-toggler bg-light ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className={`nav-link text-${props.textColor}`} aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.textColor}`} href="/">Tools</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.themeMode} Mode</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleTheme} />
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

Navbar.propTypes = {themeMode : PropTypes.string,
    toggleTheme: PropTypes.func,
    textColor: PropTypes.string
};

export default Navbar
