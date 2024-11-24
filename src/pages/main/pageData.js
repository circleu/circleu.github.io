import React from "react";
import Text from "../../elements/Text";
import HyperLink from "../../elements/HyperLink";
import githubLogo from "../../elements/github-logo.png"

const pageData = {
  "title": "메인",
  "createdate": "2024-04-06",
  "editdate": "2024-11-14",
  "content": (
    <div>
      <h3>사이트에 대해</h3>
      <p>그냥 이것저것 만들어 보며 공부한 것을 올리는 곳입니다.</p>
      <p>그르거나, 비효율적이거나 가독성이 떨어지는 코드들이 있을 수 있습니다.</p>

      <h3>본인에 대해</h3>
      <p>현재 운영체제를 공부 중입니다.</p>
      <p>덕분에 C를 진득하게 배우게 됐네요(...)</p>
      <p>UEFI를 사용한 x86_64 운영체제를 개발하려 하는 중입니다. UEFI만 해도 내용이 참 많아서 열심히 정리 중입니다.</p>
      
      <h3>외부 링크</h3>
      <HyperLink img={githubLogo} label="Github" text="https://github.com/circleu" link="https://github.com/circleu"/>
      <HyperLink img={null} label="e-Mail" text="shanwdev25@gmail.com" link="mailto:shanwdev25@gmail.com" />
    </div>
  )
}

function Main() {
  return (
    <Text title={pageData.title} createdate={pageData.createdate} editdate={pageData.editdate} content={pageData.content} />
  );
}

export default Main;