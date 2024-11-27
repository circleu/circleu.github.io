import React from "react";
import CategoryPage from "../../../elements/CategoryPage";
import OperatingSystem from "./operating-system/pageData";
import Tools from "./tools/pageData";


const C = {
  data: {
    title: "C",
    dir: "/development/c",
    content: (
      <div>
        {OperatingSystem.data.content}
        {Tools.data.content}
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