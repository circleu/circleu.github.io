import React from "react";


function CollapseExpandIndex(name) {
  var index = document.getElementsByName(name);

  for (var i = 0; i < index.length; i++) {
    var d = index.item(i);
    if (d.className === "index-content-collapsed")
      d.className = "index-content";
    else if (d.className === "index-content")
      d.className = "index-content-collapsed";
  }

  return;
}

// onClick={() => CollapseExpandIndex(name)} if you want to make an index foldable, use this.

function FolderIndex({name, link, isopen, isindent, content}) {
  var obj;
  
  if (isopen == 1) {
    obj = (
      <div>
        <li className="index-foldable"><a className="index-button" href={link}>{name}</a></li>
        <div className="index-content" name={name}>{content}</div>
      </div>
    );
  }
  else if (isopen == 0) {
    obj = (
      <div>
        <li className="index-foldable"><a className="index-button" href={link}>{name}</a></li>
        <div className="index-content-collapsed" name={name}>{content}</div>
      </div>
    );
  }

  if (isindent == 1) {
    return (
      <ul>
        {obj}
      </ul>
    )
  }
  else if (isindent == 0) {
    return (
      <div>
        {obj}
      </div>
    )
  }
}

export default FolderIndex;