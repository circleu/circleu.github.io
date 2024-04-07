import React from "react";
import Text from "../../elements/Text";

const pageData = {
  'title': '메인',
  'lastdate': '2024-03-17 01:30',
  'content': (
    <div>
      <h3>사이트에 대해</h3>
      <p>그냥 이것저것 만들어 보며 공부한 것을 올리는 곳입니다.</p>
      <p>아직 프로그래밍을 배운 지 얼마 되지 않아 그르거나, 비효율적이거나 가독성이 떨어지는 코드들이 많을 겁니다.</p>

      <h3>나에 대해</h3>
      <p>현재 C, 파이썬, 자바스크립트를 공부 중입니다.</p>
      <p>C, 파이썬은 프로그램을 만들며 공부 중이고, 자바스크립트는 이 사이트를 만들며 공부 중입니다.</p>
      
      <h3>외부 링크</h3>
      <p>Github: <a className='link' href='https://github.com/circleu'>https://github.com/circleu</a></p>
    </div>
  )
}

function Main() {
  return (
    <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
  );
}

export default Main;