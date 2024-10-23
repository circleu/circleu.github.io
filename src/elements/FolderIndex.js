import React from "react";


function CollapseExpandIndex(name) {
  var index = document.getElementsByName(name);

  for (var i = 0; i < index.length; i++) {
    var d = index.item(i);
    if (d.className === "content-collapsed")
      d.className = "content";
    else if (d.className === "content")
      d.className = "content-collapsed";
  }

  return;
}

function FolderIndex({name, content}) {
  return (
    <ul>
      <li className="index" onClick={() => CollapseExpandIndex(name)}>{name}</li>
      <div className="content-collapsed" name={name}>{content}</div>
    </ul>
  );
}

export default FolderIndex;