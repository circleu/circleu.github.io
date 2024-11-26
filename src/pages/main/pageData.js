import React from "react";
import Text from "../../elements/Text";
import HyperLink from "../../elements/HyperLink";
import githubLogo from "../../elements/github-logo.png"


const Main = {
  data: {
    title: "메인",
    createdate: "2024-04-06",
    editdate: "2024-11-14",
    category: [""],
    dir: "/",
    content: (
      <div>
        <h3>사이트에 대해</h3>
        <p>그냥 이것저것 만들어 보며 공부한 것을 올리는 곳입니다.</p>
        <p>그르거나, 비효율적이거나 가독성이 떨어지는 코드들이 있을 수 있습니다.</p>
  
        <h3>본인에 대해</h3>
        <p>현재 운영체제를 공부 중입니다.</p>
        <p>덕분에 C를 진득하게 배우게 됐네요(...)</p>
        <p>UEFI를 이용한 운영체제를 제작하려 합니다. UEFI가 내용이 많아서 열심히 정리 중입니다.</p>
        
        <h3>외부 링크</h3>
        <HyperLink img={githubLogo} label="Github" text="https://github.com/circleu" link="https://github.com/circleu"/>
        <HyperLink img={null} label="e-Mail" text="shanwdev25@gmail.com" link="mailto:shanwdev25@gmail.com" />
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={Main.data.title} createdate={Main.data.createdate} editdate={Main.data.editdate} content={Main.data.content} />
    );
  }
}

export default Main;