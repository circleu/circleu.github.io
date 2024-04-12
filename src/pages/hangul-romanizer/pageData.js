import React from "react";
import Text from "../../elements/Text";

const pageData = {
  "title": "한글 로마자 변환기",
  "lastdate": "2024-04-07 13:00",
  "content": (
    <div>
      <h2>1. 준비</h2>

      <h3>개요</h3>
      <p>한글을 로마자로 변환하는 프로그램입니다.</p>
      <p>한글과 한국어에 관심이 많아 만들게 되었습니다.</p>

      <h3>알아야 할 것</h3>
      <h4>국어의 로마자 표기법</h4>
    </div>
  )
}

function HangulRomanizer() {
  return (
    <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
  );
}

export default HangulRomanizer;