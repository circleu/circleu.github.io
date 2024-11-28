import React from "react";
import CategoryPage from "../../../elements/CategoryPage";
import _64BitOSUsingUEFI from "./64-bit-os-using-uefi/pageData";


const OperatingSystem = {
  data: {
    title: "운영체제",
    dir: "/development/operating-system",
    content: (
      <div>
        {_64BitOSUsingUEFI.data.content}
      </div>
    )
  },
  
  page: function () {
    return (
      <CategoryPage title={OperatingSystem.data.title} content={OperatingSystem.data.content} />
    )
  }   
}

export default OperatingSystem;