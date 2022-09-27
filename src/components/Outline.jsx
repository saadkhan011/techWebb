import React from "react";
function Outlines(props) {
  return (
    <div data-aos={props.data} onClick={() => {
      props.func(props.title);
    }} className="outline-boxex outlines">
      {props.stateTitle === props.title ? <h4 style={props.h4}><i><props.icon fontSize="medium" /></i>&#160;{props.title}</h4> : <h4 ><i><props.icon fontSize="medium" /></i>&#160;{props.title}</h4>}
      {props.stateTitle === props.title ? <p style={props.style}>{props.post}</p> : null}

    </div>
  );
}

export default Outlines;
