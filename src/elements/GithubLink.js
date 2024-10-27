import React from "react"
import githubLogo from "./github-logo.png"

function GithubLink({text, link}) {
  return (
    <span>
      <img className="exlink-img" src={githubLogo}></img><p className="exlink-text">Github: <a className="link" href={link}>{text}</a></p>
    </span>
  );
}
export default GithubLink;