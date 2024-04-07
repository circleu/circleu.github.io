import React from "react";
import Text from "../../elements/Text";

const pageData = {
  'title': '파이썬 하이라이터',
  'lastdate': '2024-04-08 02:16',
  'content': (
    <div>
      <h3>개요</h3>
      <p>파이썬 코드 하이라이터입니다.</p>
      <p>파이썬 코드를 한 단어씩 입력하면 html 파일에 요소가 한 개씩 추가되는 방식입니다.</p>
      <p>제 사이트의 코드 블록을 편하게 쓰려고 만든 것이라 다른 용도로 쓰기에는 불편할 겁니다.</p>

      <h3>코드</h3>
      <div className='codeblock-body'>
        <div className='codeblock-text'>
        </div>
      </div>
    </div>
  )
};

function PythonHighlighter() {
  return (
    <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
  );
}

export default PythonHighlighter;