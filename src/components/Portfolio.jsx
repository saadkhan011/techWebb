import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Portfolio() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    return (
        <>
            <div data-aos="zoom-out-up" className="about-h1">
                <h1>P<span className="span">ortfol</span>io</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-5 col-md-5 portfolio">
                        <img src="/images/1.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                    <div className="col-lg-4 col-sm-5 col-md-5 portfolio">
                        <img src="/images/2.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 portfolio">
                        <img src="/images/3.png"  alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 col-sm-6 col-md-6 portfolio">
                        <img src="/images/1.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 portfolio">
                        <img src="/images/2.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 portfolio">
                        <img src="/images/3.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-lg-4 col-sm-6 col-md-6  portfolio">
                        <img src="/images/1.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 portfolio">
                        <img src="/images/2.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6 portfolio">
                        <img src="/images/3.png" alt="" />
                        <p className="mt-4">WEB APPLICATION PORTAL</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio;