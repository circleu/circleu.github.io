import React from "react";
import CategoryPage from "../../../elements/CategoryPage";
import PageList from "../../../elements/PageList";
import RandomGeneratingAlgorithm from "./random-generating-algorithm/pageData"
import PythonCodeHighlighter from "./python-code-highlighter/pageData";


const Python = {
  data: {
    title: "Python",
    dir: "/development/python",
    content: (
      <div>
        <PageList pageData={PythonCodeHighlighter.data} img={null} />
        <PageList pageData={RandomGeneratingAlgorithm.data} img={null} />
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={Python.data.title} content={Python.data.content} />
    )
  }   
}

export default Python;