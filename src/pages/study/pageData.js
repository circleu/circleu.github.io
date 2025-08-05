import React from "react";
import CategoryPage from "../../elements/CategoryPage";
import PageList from "../../elements/PageList";
import FPrimeXDividedByFX from "./f-prime-x-divided-by-f-x/pageData";
import DifferentiationAndIntegrationOfCircle from "./differentiation-and-integration-of-circle/pageData";


const Study = {
  data: {
    title: "공부",
    dir: "/study",
    content: (
      <div>
        <PageList pageData={DifferentiationAndIntegrationOfCircle.data} img={null} />
        <PageList pageData={FPrimeXDividedByFX.data} img={null} />
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