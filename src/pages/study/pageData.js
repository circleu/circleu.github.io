import React from "react";
import CategoryPage from "../../elements/CategoryPage";


const Study = {
  data: {
    title: "공부",
    dir: "/study",
    content: (
      <div>
        
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={Study.data.title} content={Study.data.content} />
    )
  }   
}

export default Study;