import React from "react"

function Text({title, lastdate, content}) {
  return (
    <div id="Main-body">
      <div id="Main-frame">
        <div id="Main-text">
        <h1>{title}</h1>
        <hr></hr>

        <p id="Lastdate">최근 수정: {lastdate}</p>
        {content}
        <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Text;