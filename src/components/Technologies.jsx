import Aos from "aos";
import "aos/dist/aos.css";
import Outlines from "./Outline";
import {AlternateEmail, AutoFixNormal, Code, AlarmOn, Headphones} from '@mui/icons-material';
import data from "../outline";
import { useEffect, useState } from "react";
function Technologies() {
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
                showData("Planning & analaysis")
            }}>
                <div data-aos="zoom-out-up" className="about-h1">
                    <h1>Tec<span className="span">hnolog</span>ies</h1>
                </div>
                <section>
                    <div className="container">
                        <div className="row manSection">
                            <div className="col-lg-1 col-md-12 col-sm-12 mt-4"></div>
                            <div className="col-lg-10 col-md-12 col-sm-12 mt-4">
                                <Outlines func={showData} title={data[0].title} icon={AutoFixNormal} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[1].title} icon={AlternateEmail} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[2].title} icon={Code} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[3].title} icon={Headphones} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                                <Outlines func={showData} title={data[4].title} icon={AlarmOn} stateTitle={state.title} post={state.post} style={style} h4={h4} />
                            </div>
                            <div className="col-lg-1 col-md-12 col-sm-12 mt-4"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Technologies;