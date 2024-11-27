import React from "react";
import CategoryPage from "../../../elements/CategoryPage";


const Python = {
  data: {
    title: "Python",
    dir: "/development/python",
    content: (
      <div>
        
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