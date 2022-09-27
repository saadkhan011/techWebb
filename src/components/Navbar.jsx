import React from "react";
import "../home.css"
import { Link } from "react-router-dom"
function Navbar() {
    return (<>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/#">
                        <img src="/images/techlogo2.png" alt="Bootstrap" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="list collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="mx-4 nav-item">
                                <Link className="link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="mx-4 nav-item">
                                <Link className="link" to="/about">About us</Link>
                            </li>
                            <li className="mx-4 nav-item">
                                <Link className="link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="mx-4 nav-item">
                                <Link className="link" to="/services">Services</Link>
                            </li>
                            <li className="mx-4 nav-item">
                                <Link className="link" to="/technologies">Technologies</Link>
                            </li>
                            <li className="mx-4 nav-item">
                                <Link className="link" to="/ContactUs">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>)
}
export default Navbar;