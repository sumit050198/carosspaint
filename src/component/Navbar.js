import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-6">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/ContactUs">ContactUs</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 col-6">
                            <li className="nav-item ms-auto">
                            <Link style={{border: "1px solid blue"}} className="nav-link active" aria-current="page" to="/ContactUs">Sign In</Link>
                                {/* <button type="button" class="btn btn-light">Sign In</button> */}
                            </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
