import React from "react";
function Boxex(props) {
    return (
        <div className="col-lg-3 col-sm-12 col-md-12 box1 transparent-box">
            <i><props.icon sx={{ fontSize: "70px" }} /></i>
            <h5>{props.title}</h5>
            <p>{props.post}</p>
        </div>
    );
}

export default Boxex;
