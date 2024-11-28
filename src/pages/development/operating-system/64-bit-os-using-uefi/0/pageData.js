import React from "react";
import Text from "../../../../../elements/Text";
import HyperLink from "../../../../../elements/HyperLink";
import githubLogo from "../../../../../elements/github-logo.png"


const _64BitOSUsingUEFI0 = {
  data: {
    title: "UEFI를 사용한 64비트 운영체제 - 0. 들어가며",
    createdate: "2024-10-23",
    editdate: "2024-11-28",
    category: ["개발", "운영체제", "UEFI를 사용한 64 비트 운영체제"],
    dir: "/development/operating-system/64-bit-os-using-uefi/0",
    content: (
      <div>
        <h3>들어가는 글</h3>
        <p>UEFI를 사용한 64비트 운영체제를 만들어 보고자 합니다.</p>
        <p>개발 환경은 GNU-EFI를 사용할 예정이고 아키텍처는 x86_64입니다.</p>
        <p>아래는 리포지토리 링크입니다:</p>
        <HyperLink img={githubLogo} label="Github" text="https://github.com/circleu/OSForteu64" link="https://github.com/circleu/OSForteu64" />
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={_64BitOSUsingUEFI0.data.title} createdate={_64BitOSUsingUEFI0.data.createdate} editdate={_64BitOSUsingUEFI0.data.editdate} content={_64BitOSUsingUEFI0.data.content} />
    );
  }  
}

export default _64BitOSUsingUEFI0;