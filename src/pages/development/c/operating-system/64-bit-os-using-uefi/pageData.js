import React from "react";
import CategoryPage from "../../../../../elements/CategoryPage";
import PageList from "../../../../../elements/PageList";
import _64BitOSUsingUEFI0 from "./0/pageData";


const _64BitOSUsingUEFI = {
  data: {
    title: "UEFI를 사용한 64 비트 운영체제",
    content: (
      <div>
        <PageList pageData={_64BitOSUsingUEFI0.data} img={null} />
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={_64BitOSUsingUEFI.data.title} content={_64BitOSUsingUEFI.data.content} />
    )
  }   
}

export default _64BitOSUsingUEFI;