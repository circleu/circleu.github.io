import React from "react";
import Text from "../../../../elements/Text";


const RandomGeneratingAlgorithm = {
  data: {
    title: "난수 생성 알고리즘",
    createdate: "2024-11-28",
    editdate: "2024-11-28",
    category: ["개발", "Python"],
    dir: "/development/python/random-generating-algorithm",
    content: (
      <div>
        <h3>들어가는 글</h3>
        <p>학교 과제용으로 제작한 난수 생성 알고리즘입니다.</p>

        <h3>코드</h3>
        <h3>main.py</h3>
<div>
  
</div>
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={RandomGeneratingAlgorithm.data.title} createdate={RandomGeneratingAlgorithm.data.createdate} editdate={RandomGeneratingAlgorithm.data.editdate} content={RandomGeneratingAlgorithm.data.content} />
    );
  }  
}

export default RandomGeneratingAlgorithm;