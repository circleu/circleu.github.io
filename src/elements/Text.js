import React from "react"

function Text({title, createdate, editdate, content}) {
  return (
    <div id="Main-body">
      <div id="Main-frame">
        <div id="Main-text">
        <h1>{title}</h1>
        <hr></hr>

        <p id="date">생성 일자: {createdate}</p>
        <p id="date">수정 일자: {editdate}</p>
        {content}
        <hr></hr>
        </div>
      </div>
    </div>
  );
}
export default Text;