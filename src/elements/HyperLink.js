import React from "react";

function HyperLink({img, label, text, link}) {
  if (img == null) {
    return (
      <div className="hyperlink-body">
        <span className="hyperlink-label">{label}{":"}&nbsp;</span>
        <a className="hyperlink-link" href={link}>{text}</a>
      </div>
    );
  }
  else {
    return (
      <div className="hyperlink-body">
        <img className="hyperlink-img" src={img}></img>
        <span className="hyperlink-label">{label}{":"}&nbsp;</span>
        <a className="hyperlink-link" href={link}>{text}</a>
      </div>
    );
  }
  
}

export default HyperLink