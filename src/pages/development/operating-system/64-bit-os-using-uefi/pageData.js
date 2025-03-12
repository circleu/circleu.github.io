import React from "react";
import CategoryPage from "../../../../elements/CategoryPage";
import PageList from "../../../../elements/PageList";
import _64BitOSUsingUEFI0 from "./0/pageData";
import _64BitOSUsingUEFI1 from "./1/pageData";


const _64BitOSUsingUEFI = {
  data: {
    title: "UEFI를 사용한 64 비트 운영체제",
    dir: "/development/operating-system/64-bit-os-using-uefi",
    content: (
      <div>
        <PageList pageData={_64BitOSUsingUEFI0.data} img={null} />
        <PageList pageData={_64BitOSUsingUEFI1.data} img={null} />
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