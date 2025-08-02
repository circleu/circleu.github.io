import React from "react";
import CategoryPage from "../../../elements/CategoryPage";
import PageList from "../../../elements/PageList";
import CCodeHighlighter from "./c-code-highlighter/pageData";
import RandomGeneratingAlgorithm from "./random-generating-algorithm/pageData"
import CFileIO from "./c-file-io/pageData";


const C = {
  data: {
    title: "C",
    dir: "/development/c",
    content: (
      <div>
        <PageList pageData={CFileIO.data} img={null} />
        <PageList pageData={RandomGeneratingAlgorithm.data} img={null} />
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