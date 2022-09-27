import Aos from "aos";
import "aos/dist/aos.css";
import Outlines from "./Outline";
import { AlignVerticalTop, BarChart, Code, AlarmOn, Build, Headphones, AcUnit } from '@mui/icons-material';
import data from "../services";
import { useEffect, useState } from "react";
function Services() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    const p = {
        margin: "15px 15px 30px 20px",
        textAlign: "justify",
        color: "#545355",
    }
    const [h4, seth4] = useState()
    const [style, setStyle] = useState();
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
    return (
        <>
            <div onMouseEnter={() => {
                showData("Mobile Application Development & Maintenance")
            }}>
                <div data-aos="zoom-out-up" className="about-h1">
                    <h1>Se<span className="span">rvic</span>es</h1>
                </div>
                <section>
                    <div className="container">
                        <div className="row manSection">
                            <div className="col-lg-1 col-md-12 col-sm-12"></div>
                            <div className="col-lg-10 col-md-12 col-sm-12 mt-4">
                                <Outlines func={showData} title={data[0].title} icon={AcUnit} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[1].title} icon={Code} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[2].title} icon={Build} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[3].title} icon={Headphones} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[4].title} icon={AlarmOn} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[5].title} icon={AlignVerticalTop} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[6].title} icon={BarChart} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[7].title} icon={Build} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                            </div>
                            <div className="col-lg-1 col-md-12 col-sm-12"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Services;