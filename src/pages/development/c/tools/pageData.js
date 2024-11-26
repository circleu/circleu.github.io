import React from "react";
import CategoryPage from "../../../../elements/CategoryPage";
import PageList from "../../../../elements/PageList";
import CCodeHighlighter from "./c-code-highlighter/pageData";


const Tools = {
  data: {
    title: "도구",
    content: (
      <div>
        <PageList pageData={CCodeHighlighter.data} img={null}/>
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={Tools.data.title} content={Tools.data.content} />
    )
  }   
}

export default Tools;