import { Link } from "react-router-dom"
import {LocationOn, Email} from '@mui/icons-material';
import React from "react";
import "../home.css"
function Footer() {
    return (<>
        <section>
            <footer>
                <div className="container pt-4">
                    <div className="row pt-4 px-3">
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <div className="footer-logo mb-4">
                                <img src="/images/techlogo3.png" alt="Bootstrap" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12 mb-4">
                            <h4 className="mb-4">C<span className="span">ontact</span> Us</h4>
                            <p>Work Hours :</p>
                            <p>Monday – Friday :</p>
                            <p>8:30am to 5:00 pm</p>
                            
                            <p><i><LocationOn /></i>47 – H Block</p>
                            <p>Gulberg 3 LHR</p>
                            <p><i><Email /></i>info@thetowertech.com</p>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12 mb-4 footer-link">
                            <h4 className="mb-4">E<span className="span">xtra Lin</span>ks</h4>
                            <Link className="a" to="/about">About Us</Link>
                            <Link className="a" to="/portfolio">Portfolio</Link>
                            <Link className="a" to="/services">Services</Link>
                            <Link className="a" to="/ContactUs">Contact Us</Link>
                            <Link className="a" to="technologies">Technologies</Link>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="copy-right mb-0 pb-3">© 2021 Tower Technologies (Pvt) Ltd. All rights reserved.</p>
            </footer>
        </section>
    </>)
}
export default Footer