import React from "react";
import CategoryPage from "../../../elements/CategoryPage";
import PageList from "../../../elements/PageList";
import CCodeHighlighter from "./c-code-highlighter/pageData";


const C = {
  data: {
    title: "C",
    dir: "/development/c",
    content: (
      <div>
        <PageList pageData={CCodeHighlighter.data} img={null} />
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={C.data.title} content={C.data.content} />
    )
  }   
}

export default C;