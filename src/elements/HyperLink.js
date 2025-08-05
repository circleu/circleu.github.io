import React from "react";

function HyperLink({img, label, text, link}) {
  if (label != null) {
    label += ":";
  }

  if (img == null) {
    return (
      <span className="hyperlink-body">
        <span className="hyperlink-label">{label}&nbsp;</span>
        <a className="hyperlink-link" href={link}>{text}</a>
      </span>
    );
  }
  else {
    return (
      <span className="hyperlink-body">
        <img className="hyperlink-img" src={img} alt={label}></img>
        <span className="hyperlink-label">{label}&nbsp;</span>
        <a className="hyperlink-link" href={link}>{text}</a>
      </span>
    );
  }
  
}

export default HyperLink