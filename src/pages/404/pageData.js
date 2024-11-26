import React from "react";
import Text from "../../elements/Text";


const _404 = {
  data: {
    title: "페이지를 찾을 수 없습니다.",
    createdate: "404-Not-Found",
    editdate: "404-Not-Found",
    category: [""],
    dir: "/*",
    content: (
      <div>
        <h3>페이지를 찾을 수 없습니다.</h3>
        <p>페이지가 삭제되었거나 올바르지 않은 주소를 입력했을 수 있습니다.</p>
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={_404.data.title} createdate={_404.data.createdate} editdate={_404.data.editdate} content={_404.data.content} />
    );
  }
}

export default _404;