import React from "react";


function CategoryPage({title, content}) {
  return (
    <div id="Main-body">
      <div id="Main-frame">
        <div id="Main-text">
        <h1 style={{display: "inline-block"}}>{title}</h1>
        <span className="categorypage-title"> 관련 글</span>
        <hr></hr>
        {content}
        <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;