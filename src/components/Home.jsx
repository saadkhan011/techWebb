import Boxex from "./boxex";
import Box from "../Box";
import { AirplanemodeActive, AlignVerticalTop, AllInclusive, AlternateEmail, Architecture, AutoFixNormal, BarChart, Blind, Code, AlarmOn, Build, Headphones, AcUnit } from '@mui/icons-material';
import { useState, useEffect } from "react";
import Outlines from "./Outline";
import data from "../outline";
import { Link } from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css";
import "../home.css"
function Home() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    })
    const p = {
        margin: "15px 15px 30px 20px",
        textAlign: "justify",
        color: "#545355",
    }
    const [style, setStyle] = useState();
    const [h4, seth4] = useState()
    const [text, setext] = useState("");
    const [state, setstate] = useState({
        title: "",
        post: ""
    });
    function showData(title) {
        const found = data.find((element) => {
            return element.title === title;
        })
        seth4({
            color: "red",
            border: "2px solid red",
            borderRadius: "31px",
            padding: "11px"
        })
        setStyle(p)
        setstate(found);
    }
    setTimeout(() => {
        setext("Using Next Generation Technologies")
    }, 1650);
    return (<>
        <main>
            <section>
                <div className="background">
                    <div className="container">
                        <div className="row">
                            <div className="lamp">
                                <img src="/images/lamp.png" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 header-text">
                                <div className="animation-h1"></div>
                                <h1 className="mb-4">User-friendly product</h1>
                                <div className="animation-p"></div>
                                <p className="mb-4">{text}</p>
                                <Link className="a" to="/about"><button className="btnn">Learn more</button></Link>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                                <img className="computer" src="/images/computer.png" alt="" srcSet="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-12 box transparent-box">
                            <img src="/images/microsoft-logo-2-1024x177.png" alt="" />
                            <p>As our Worldwide Partner Network, Microsoft helps us to strengthen our technical capabilities
                                providing access to valuable resources that help us in delivering world-className IT services to
                                our clientele.</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-12 box transparent-box">
                            <img src="/images/certiport-logo.png" alt="" />
                            <p>We work with industry leaders to enhance our capabilities and improve our services. Through
                                these partnerships, we are able to support a wider range of projects, enhance our staff
                                expertise, and streamline solution implementation.</p>
                        </div>
                        <div className="col-lg-3 col-sm-12 col-md-12 box dotted-box">
                            <h3>Partnerships & Associations</h3>
                            <p>Tower Technologies is proud to be a Certiport Authorized Testing Center (CATC) which allows
                                us to conduct and hold exams in our testing centers eventually helping people succeed
                                through certification.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 system">
                            <img src="/images/system.png" alt="" srcSet="" />
                        </div>
                        <div className="col-lg-5 col-sm-12 system-text">
                            <h4>Our solution is defined by your business needs</h4>
                            <p>We provide custom software applications & support the evolution of the mobile workforce. As
                                your Information Technology partner, we transition you from systems and processes that
                                aren’t working, to custom IT services that help you save money, improve performance, and
                                work more efficiently.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div data-aos="fade-up" className="manText">
                    <h3>Our Process</h3>
                    <p>We observe a seamless process, from thorough preliminary research to maintenance & marketing, in order to ensure that a complete product is delivered to our clients.</p></div>
                <div onMouseEnter={() => {
                    showData("Planning & analaysis")
                }} className="container">
                    <div className="row manSection">
                        <div data-aos="fade-up" className="col-lg-5 col-md-12 col-sm-12">
                            <img src="./images/man.png" alt="" />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <Outlines func={showData} title={data[0].title} icon={AcUnit} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                            <Outlines func={showData} title={data[1].title} icon={Code} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                            <Outlines func={showData} title={data[2].title} icon={Build} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                            <Outlines func={showData} title={data[3].title} icon={Headphones} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                            <Outlines func={showData} title={data[4].title} icon={Headphones} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="fade-up" id="services">
                <div className="manText">
                    <h3>What we offer</h3>
                    <p>
                        We have a team of qualified professionals with over 19 years of experience in Development, Design, Digital Marketing, Search Engine Optimization (SEO) & more in order to provide the perfect branding solution to your business</p>
                </div>
                <div className="container-fluid">
                    <div data-aos="fade-up" className="row">
                        <Boxex title={Box[0].title} post={Box[0].post} icon={AlarmOn} />
                        <Boxex title={Box[1].title} post={Box[1].post} icon={AirplanemodeActive} />
                        <Boxex title={Box[2].title} post={Box[2].post} icon={AlignVerticalTop} />
                    </div>
                    <div data-aos="fade-up" className="row">
                        <Boxex title={Box[3].title} post={Box[3].post} icon={AllInclusive} />
                        <Boxex title={Box[4].title} post={Box[4].post} icon={AlternateEmail} />
                        <Boxex title={Box[5].title} post={Box[5].post} icon={AutoFixNormal} />
                    </div>
                    <div data-aos="fade-up" className="row">
                        <Boxex title={Box[6].title} post={Box[6].post} icon={BarChart} />
                        <Boxex title={Box[7].title} post={Box[7].post} icon={Blind} />
                        <Boxex title={Box[8].title} post={Box[8].post} icon={Architecture} />
                    </div>
                </div>
            </section>
            <section id="projects">
                <div data-aos="fade-up" className="manText">
                    <h3>We complete +100 Projects Yearly</h3>
                </div>
                <div className="container">
                    <div className="row experience">
                        <div data-aos="fade-down" className="col-lg-3 col-sm-12">
                            <i className="mb-4"><AirplanemodeActive sx={{ fontSize: "80px" }} /></i>
                            <p className="mt-4">19+</p>
                            <p>Years of experience</p>
                        </div>
                        <div data-aos="fade-up" className="col-lg-3 col-sm-12">
                            <i className="mb-4"><AcUnit sx={{ fontSize: "80px" }} /></i>
                            <p className="mt-4">150+</p>
                            <p>qualified professionals</p>
                        </div>
                        <div data-aos="fade-down" className="col-lg-3 col-sm-12">
                            <i className="mb-4"><AlarmOn sx={{ fontSize: "80px" }} /></i>
                            <p className="mt-4">120+</p>
                            <p>projects completed</p>
                        </div>
                        <div data-aos="fade-up" className="col-lg-3 col-sm-12">
                            <i className="mb-4"><AlignVerticalTop sx={{ fontSize: "80px" }} /></i>
                            <p className="mt-4">50+</p>
                            <p>industries catered</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>)
}
export default Home;