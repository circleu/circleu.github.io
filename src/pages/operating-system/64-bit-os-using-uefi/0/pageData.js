import React from "react";
import Text from "../../../../elements/Text";

const pageData = {
  "title": "UEFI를 사용한 64비트 운영체제 - 0. 들어가며",
  "lastdate": "2024-10-23 23:48",
  "content": (
    <div>
      <h3>들어가는 글</h3>
      <p>작성 예정</p>
    </div>
  )
}

function _64BitOSUsingUEFI0() {
  return (
    <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
  );
}

export default _64BitOSUsingUEFI0;