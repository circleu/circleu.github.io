import React from "react";
import CategoryPage from "../../elements/CategoryPage";
import C from "./c/pageData";


const Development = {
  data: {
    title: "개발",
    dir: "/development",
    content: (
      <div>
        {C.data.content}
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={Development.data.title} content={Development.data.content} />
    )
  }   
}

export default Development;