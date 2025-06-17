import React from "react";
import HyperLink from "./HyperLink";


function LinearIndex({name, link, isindent}) {
  if (isindent == 1) {
    return (
      <ul>
        <li className="index">
          <a className="index-button" href={link}>{name}</a>
        </li>
      </ul>
    )
  }
  else if (isindent == 0) {
    return (
      <div>
        <li className="index">
          <a className="index-button" href={link}>{name}</a>
        </li>
      </div>
    )
  }
}

export default LinearIndex;