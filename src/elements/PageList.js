import React from "react";


function PageList({pageData, img}) {
  if (img == null) {
    return (
      <div>
        <hr></hr>
        <a href={pageData.dir}>
          <div className="pagelist-body">
            <div className="pagelist-text">
              <p className="pagelist-title">{pageData.title}</p>
              <p className="pagelist-date">날짜: {pageData.createdate}</p>
              <p className="pagelist-category">카테고리: {pageData.category.join(", ")}</p>
            </div>    
          </div>
        </a>
        <hr></hr>
      </div>
    );
  }
  else {
    return (
      <div>
        <hr></hr>
        <a href={pageData.dir}>
          <div className="pagelist-body">
            <div className="pagelist-text">
              <span>{img}</span>
              <p className="pagelist-title">{pageData.title}</p>
              <p className="pagelist-date">날짜: {pageData.createdate}</p>
              <p className="pagelist-category">카테고리: {pageData.category.join(", ")}</p>
            </div>    
          </div>
        </a>
        <hr></hr>
      </div>
    );
  }
}

export default PageList;