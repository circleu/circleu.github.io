import React from "react";
import Text from "../../../../../elements/Text";
import GithubLink from "../../../../../elements/GithubLink";

const pageData = {
  "title": "UEFI를 사용한 64비트 운영체제 - 0. 들어가며",
  "createdate": "2024-10-23 23:48",
  "editdate": "2024-11-03 01:01",
  "content": (
    <div>
      <h3>들어가는 글</h3>
      <p>UEFI를 사용한 64비트 운영체제를 만들어 보고자 합니다. 글 구성은 대체로 개념 설명 후 기능을 구현하는 구성으로 작성될 것 같습니다.</p>
      <p>개발 환경은 GNU-EFI를 사용할 예정이고 아키텍처는 x86_64입니다.</p>
      <p>아래는 리포지토리 링크입니다:</p>
      <GithubLink text="https://github.com/circleu/OSForteu64" link="https://github.com/circleu/OSForteu64" />
    </div>
  )
}

function _64BitOSUsingUEFI0() {
  return (
    <Text title={pageData.title} createdate={pageData.createdate} editdate={pageData.editdate} content={pageData.content} />
  );
}

export default _64BitOSUsingUEFI0;