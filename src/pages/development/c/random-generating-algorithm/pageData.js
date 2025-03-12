import React from "react";
import Text from "../../../../elements/Text";


const RandomGeneratingAlgorithm = {
  data: {
    title: "난수 생성 알고리즘",
    createdate: "2024-11-28",
    editdate: "2024-12-18",
    dir: "/development/c/random-generating-algorithm",
    content: (
      <div>
        <h3>들어가는 글</h3>
        <p>학교 과제용으로 제작한 난수 생성 알고리즘입니다.</p>

        <h3>코드</h3>
        <h3>random.c</h3>
        <div className="codeblock-body">
          <div className="codeblock-text">
<div>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"include"}</span>&nbsp;<span className="code-white">{"<"}</span><span className="code-white">{"stdint"}</span><span className="code-white">{"."}</span><span className="code-white">{"h"}</span><span className="code-white">{">"}</span><br></br>
<br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"A"}</span>&nbsp;<span className="code-lightgreen">{"3707028463"}</span><span className="code-white">{"UL"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"B"}</span>&nbsp;<span className="code-lightgreen">{"1325917969"}</span><span className="code-white">{"UL"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"C"}</span>&nbsp;<span className="code-lightgreen">{"13"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"D"}</span>&nbsp;<span className="code-lightgreen">{"5"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"E"}</span>&nbsp;<span className="code-lightgreen">{"7"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"U"}</span>&nbsp;<span className="code-lightgreen">{"0x10000000"}</span><br></br>
<span className="code-magenta">{"#"}</span><span className="code-magenta">{"define"}</span>&nbsp;<span className="code-white">{"I"}</span>&nbsp;<span className="code-lightgreen">{"65521"}</span><br></br>
<br></br>
<br></br>
<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-purple">{"randint"}</span><span className="code-blue">{"("}</span><span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"seed"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-blue">{"{"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"static"}</span>&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"k"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"static"}</span>&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"cont"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"static"}</span>&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"init_seed"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-magenta">{"if"}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seed"}</span>&nbsp;<span className="code-lightyellow">{"!"}</span><span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"init_seed"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-white">{"init_seed"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"seed"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-magenta">{"else"}</span>&nbsp;<span className="code-white">{"seed"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"cont"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-white">{"seed"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seed"}</span>&nbsp;<span className="code-lightyellow">{"|"}</span>&nbsp;<span className="code-white">{"U"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"+"}</span>&nbsp;<span className="code-white">{"k"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"seedA"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"seed"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"A"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"seedB"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"seed"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"B"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"seedB"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seedB"}</span>&nbsp;<span className="code-lightyellow">{"|"}</span>&nbsp;<span className="code-white">{"U"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"+"}</span>&nbsp;<span className="code-white">{"k"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"seedC"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-blue">{"("}</span><span className="code-white">{"seedA"}</span>&nbsp;<span className="code-lightyellow">{"|"}</span>&nbsp;<span className="code-white">{"seedB"}</span>&nbsp;<span className="code-lightyellow">{"-"}</span>&nbsp;<span className="code-white">{"k"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seedA"}</span>&nbsp;<span className="code-lightyellow">{"&"}</span>&nbsp;<span className="code-white">{"seedB"}</span>&nbsp;<span className="code-lightyellow">{"+"}</span>&nbsp;<span className="code-white">{"k"}</span><span className="code-blue">{")"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"seed"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"x"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seedC"}</span>&nbsp;<span className="code-lightyellow">{">"}</span><span className="code-lightyellow">{">"}</span>&nbsp;<span className="code-white">{"C"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"seed"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"x"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seedC"}</span>&nbsp;<span className="code-lightyellow">{"<"}</span><span className="code-lightyellow">{"<"}</span>&nbsp;<span className="code-white">{"D"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"seed"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"x"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"seedC"}</span>&nbsp;<span className="code-lightyellow">{"<"}</span><span className="code-lightyellow">{"<"}</span>&nbsp;<span className="code-white">{"E"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"seed"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-white">{"uint32_t"}</span>&nbsp;<span className="code-white">{"y"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"x"}</span>&nbsp;<span className="code-lightyellow">{"+"}</span>&nbsp;<span className="code-white">{"C"}</span>&nbsp;<span className="code-lightyellow">{"+"}</span>&nbsp;<span className="code-white">{"D"}</span>&nbsp;<span className="code-lightyellow">{"+"}</span>&nbsp;<span className="code-white">{"E"}</span><span className="code-lightyellow">{";"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-magenta">{"if"}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"k"}</span>&nbsp;<span className="code-lightyellow">{"<"}</span>&nbsp;<span className="code-white">{"I"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-blue">{"{"}</span><br></br>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-white">{"cont"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-white">{"y"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-white">{"k"}</span><span className="code-lightyellow">{"+"}</span><span className="code-lightyellow">{"+"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-blue">{"}"}</span>&nbsp;<span className="code-magenta">{"else"}</span>&nbsp;<span className="code-blue">{"{"}</span><br></br>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-white">{"k"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-lightgreen">{"0"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-white">{"cont"}</span>&nbsp;<span className="code-lightyellow">{"="}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"cont"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-white">{"y"}</span><span className="code-blue">{")"}</span>&nbsp;<span className="code-lightyellow">{"^"}</span>&nbsp;<span className="code-blue">{"("}</span><span className="code-white">{"x"}</span>&nbsp;<span className="code-lightyellow">{"-"}</span>&nbsp;<span className="code-white">{"k"}</span><span className="code-blue">{")"}</span><span className="code-lightyellow">{";"}</span><br></br>
&nbsp;&nbsp;<span className="code-blue">{"}"}</span><br></br>
<br></br>
&nbsp;&nbsp;<span className="code-magenta">{"return"}</span>&nbsp;<span className="code-white">{"y"}</span><span className="code-lightyellow">{";"}</span><br></br>
<span className="code-blue">{"}"}</span>
</div>
          </div>
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