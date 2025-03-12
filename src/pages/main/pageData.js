import React from "react";
import Text from "../../elements/Text";
import HyperLink from "../../elements/HyperLink";
import githubLogo from "../../elements/github-logo.png"
import emailIcon from "../../elements/email-icon.jpg"


const Main = {
  data: {
    title: "메인",
    createdate: "2024-04-06",
    editdate: "2025-03-12",
    content: (
      <div>
        <h3>사이트에 대해</h3>
        <p>그냥 이것저것 만들어 보며 공부한 것을 올리는 곳입니다.</p>
        <p>그르거나, 비효율적이거나 가독성이 떨어지는 코드들이 있을 수 있습니다.</p>
  
        <h3>본인에 대해</h3>
        <p>운영체제를 공부 중입니다. 덕분에 C를 열심히 배우고 있습니다.</p>
        
        <h3>외부 링크</h3>
        <HyperLink img={githubLogo} label="Github" text="https://github.com/circleu" link="https://github.com/circleu"/>
        <HyperLink img={emailIcon} label="e-mail" text="shanwdev25@gmail.com" link="mailto:shanwdev25@gmail.com" />

        <h3>Site Info</h3>
        <p>The site is powered by React.js, made by circleu.</p>
        <p>Some images, including e-mail icon, etc., came from <a className="link" href="https://www.vecteezy.com">vecteezy.com</a>.</p>
        <p><a className="link" href="https://github.com/naver/d2codingfont">D2Coding</a> font is used for the site's 'codeblock' element.</p>
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