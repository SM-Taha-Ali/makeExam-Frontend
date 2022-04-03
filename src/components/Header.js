import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light navbar navbar-default navbar-fixed-top">
            <Link className="navbar-brand" to="/">
                MYEXAM<span>-MAKER</span>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <a href="/#feature">Features</a>
                    </li>
                    <li>
                        <Link to="/exam-maker">Exam-Maker</Link>
                    </li>
                    <li>
                        <Link to="/test-conduct">Test-Conduct</Link>
                    </li>
                    <li>
                        <a href="/#pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="#" data-target="#login" data-toggle="modal">
                            Sign in
                        </a>
                    </li>
                    <li className="btn-trial">
                        <a href="#footer">Free Trail</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header