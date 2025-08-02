import React from "react";
import PageList from "../../../elements/PageList";
import CategoryPage from "../../../elements/CategoryPage";
import PCINote from "./pci-note/pageData";


const OperatingSystem = {
  data: {
    title: "운영체제",
    dir: "/development/operating-system",
    content: (
      <div>
        <PageList pageData={PCINote.data} img={null} />
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