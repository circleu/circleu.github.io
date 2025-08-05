import React from "react";
import Text from "../../../elements/Text";
import {MathsExpression, MathsSetting} from "../../../elements/Maths"
import circleGif from "./circle.gif"


const DifferentiationAndIntegrationOfCircle = {
  data: {
    title: "원 미분/적분하기",
    createdate: "2025-08-05",
    editdate: "2025-08-06",
    dir: "/study/differentiation-and-integration-of-circle",
    content: (
      <div>
        <h3>들어가는 글</h3>
        <p>다항함수를 정적분하면 좌표평면에서 그 함수의 그래프와 x축이 이루는 도형의 넓이를 구할 수 있습니다.</p>
        <p>그래서 이번 글에서는 수학II 수준에서 원을 적분, 그리고 하는 김에 미분도 해 보고 정말로 원의 넓이를 구할 수 있을지 보겠습니다.</p>

        <h3>원을 함수로 나타내기</h3>
        <p>고1 수학에서 배웠듯이 원의 방정식은 <span className="maths-line"><MathsExpression x={"x^{2}+y^{2}=r^{2}"}/></span>인데, 이는 음함수이므로 수학II 수준에서는 건드릴 수가 없습니다.</p>
        <p>따라서 이를 <span className="maths-line"><MathsExpression x={"y=\\sqrt{r^{2}-x^{2}}"}/></span>로 바꾸어 진행하겠습니다.</p>

        <h3>원 미분하기</h3>
        <p>미분 먼저 해 봅시다. <span className="maths-line"><MathsExpression x={"y=\\sqrt{r^{2}-x^{2}}"}/></span>는 무리함수이므로 합성함수의 미분법을 사용하면 됩니다.</p>
        <div className="maths-frame">
          <MathsExpression x={"합성함수~미분법:"}/>
          <MathsExpression x={"미분가능한~함수~f(x),~g(x)가~있을~때,"}/>
          <MathsExpression x={"{f(g(x))}'=f'(g(x))\\times~g'(x)"}/>
        </div>
        <p>구해 봅시다.</p>
        <div className="maths-frame">
          <MathsExpression x={"f(x)=\\sqrt{r^{2}-x^{2}}=(r^{2}-x^{2})^{^{^{\\frac{1}{2}}}}라~할~때,"}/>
          <MathsExpression x={"f'(x)=\\frac{1}{2}(r^{2}-x^{2})^{^{^{-\\frac{1}{2}}}}\\times-2x=-\\frac{x}{\\sqrt{r^{2}-x^{2}}}"}/>
        </div>
        <p>구한 식이 맞는지 GeoGebra를 이용해 알아 보겠습니다. 구한 식을 통해 직선의 방정식을 세우고 원과의 교점을 표시했습니다.</p>
        <img src={circleGif}/>
        <p>잘 나왔네요.</p>
        <del><p>작성중...</p></del>
        <MathsSetting/>
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={DifferentiationAndIntegrationOfCircle.data.title} createdate={DifferentiationAndIntegrationOfCircle.data.createdate} editdate={DifferentiationAndIntegrationOfCircle.data.editdate} content={DifferentiationAndIntegrationOfCircle.data.content}/>
    );
  }  
}

export default DifferentiationAndIntegrationOfCircle;