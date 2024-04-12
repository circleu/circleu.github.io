import React from "react";
import Text from "../../elements/Text";

const pageData = {
  "title": "페이지를 찾을 수 없습니다.",
  "lastdate": "404-NotFound",
  "content": (
    <div>
      <h3>페이지를 찾을 수 없습니다.</h3>
      <p>페이지가 삭제되었거나 올바르지 않은 주소를 입력했을 수 있습니다.</p>
    </div>
  )
}

function _404() {
  return (
    <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
  );
}

export default _404;