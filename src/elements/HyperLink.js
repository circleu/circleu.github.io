import React from "react";


function Goto(link) {
  window.location.href = link;
}

function HyperLink({img, label, text, link}) {
  if (img == null) {
    return (
      <div className="hyperlink-body">
        <span className="hyperlink-label">{label}{":"}&nbsp;</span>
        <span className="hyperlink-link" onClick={() => {Goto(link)}}>{text}</span>
      </div>
    );
  }
  else {
    return (
      <div className="hyperlink-body">
        <img className="hyperlink-img" src={img}></img>
        <span className="hyperlink-label">{label}{":"}&nbsp;</span>
        <span className="hyperlink-link" onClick={() => {Goto(link)}}>{text}</span>
      </div>
    );
  }
  
}

export default HyperLink