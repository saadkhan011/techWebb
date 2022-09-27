import Aos from "aos";
import "aos/dist/aos.css";
import { AirplanemodeActive, Architecture, BarChart, Blind} from '@mui/icons-material';
import "../about.css"
import { useEffect } from "react";
function About() {
    useEffect(()=>{
        Aos.init({ duration: 1000 });
    })
    return (
        <>
            <div data-aos="zoom-out-up" className="about-h1">
                <h1>A<span className="span">bout </span>us</h1>
            </div>

            <p></p>
            <div className="container-fluid about-box">
                <div className="row">
                    <div className="col-lg-6 about-img">
                        <img src="/images/medium-shot-man-wearing-vr-glasses.jpg" alt="" />
                    </div>
                    <div className="mt-4 col-lg-6 about-box-text">
                        <h2 className="mt-4 mb-4">Who We Are</h2>
                        <p>
                            Tower Technologies (Pvt) Limited (TTL) is a well-established IT company which has been operating since 2001 as part of a larger conglomerate of private limited companies, the Punjab Group. Our vision is to empower our clients by building impactful digitally engineered solutions powered by the latest technologies. By understanding our client’s existing business processes, we ensure seamless integration with the proposed solution. We always put emphasis on building long term relations with our clients helping their businesses grow. We enable sophisticated and innovative business transformation that integrate deep industry expertise.</p>
                        <p>
                            We are a customer-driven company and our major focus is to keep our customers satisfied. We provide an end-to-end solution that fulfill our clients requirements; from research to digital marketing. It is our priority to focus on developing user-friendly products using next-generation technologies. However, we also make sure that all our solutions are affordable. After initial implementation, we eagerly provide our customers with post-sales support aiming at maintaining a long-term relationship.</p>
                        <p>
                            With our in-house highly skilled team, we recognize the fact that usability, functionality and visualization are three of the most important factors when designing functional interfaces. Using this strategy, we work with you to ensure that your message and marketing goals align with the solutions we create hence aiming to bring your idea to life.</p>
                    </div>
                </div>
            </div>
            <div className="main-div">
                <svg viewBox="40 20 174 201" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f3f5f8" d="M28.6,-42.7C40.5,-42.6,56.1,-42,64.9,-34.8C73.8,-27.6,75.8,-13.8,70.9,-2.9C65.9,8.1,54,16.2,45.2,23.4C36.4,30.7,30.8,37.1,23.8,46.3C16.8,55.4,8.4,67.2,-3.4,73C-15.1,78.9,-30.2,78.7,-41.7,72.2C-53.3,65.6,-61.2,52.8,-69.2,39.7C-77.3,26.6,-85.3,13.3,-87.7,-1.4C-90.1,-16.1,-86.9,-32.2,-78.8,-45.2C-70.8,-58.3,-58,-68.3,-44.1,-67.2C-30.2,-66.1,-15.1,-53.9,-3.4,-48.1C8.3,-42.2,16.6,-42.7,28.6,-42.7Z" transform="translate(100 100)" />
                </svg>
            </div>
            <div className="about-h3">
                <h3>Why we should work together</h3>
            </div>
            <div className="container-fluid">
                <div className="mt-4 row">
                    <div className="col-lg-5 col-sm-12 col-md-12 about-box2">
                        <i id="airplane"><AirplanemodeActive sx={{ fontSize: "80px" }} /></i>
                        <h4>We believe in creativity</h4>
                        <p>Our qualified team of professionals come from diverse backgrounds providing insights, creativity and ideas that are out of the world.</p>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-12 about-box2">
                        <i id="architecture"><Architecture sx={{ fontSize: "80px" }} /></i>
                        <h4>We believe in creativity</h4>
                        <p>Our qualified team of professionals come from diverse backgrounds providing insights, creativity and ideas that are out of the world.</p>
                    </div>
                </div>
                <div className="mt-4 row">
                    <div className="col-lg-5 col-sm-12 col-md-12 about-box2">
                        <i id="barchart"><BarChart sx={{ fontSize: "80px" }} /></i>
                        <h4>We believe in creativity</h4>
                        <p>Our qualified team of professionals come from diverse backgrounds providing insights, creativity and ideas that are out of the world.</p>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-md-12 about-box2">
                        <i id="blind"><Blind sx={{ fontSize: "80px" }} /></i>
                        <h4>We believe in creativity</h4>
                        <p>Our qualified team of professionals come from diverse backgrounds providing insights, creativity and ideas that are out of the world.</p>
                    </div>
                </div>
            </div>
            <div className="about-h3">
                <h3>Our Mission</h3>
            </div>
            <div className="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ySxIHYxDzfk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
}
export default About;