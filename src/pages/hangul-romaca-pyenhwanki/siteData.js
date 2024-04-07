import React from "react";
import Text from "../../elements/Text";

const pageData = {
    'title': '한글 로마자 변환기',
    'lastdate': '2024-04-07 13:00',
    'content': (
        <div>
            <h3>시작하기 전에</h3>
        </div>
    )
}

function HangulRomacaPyenhwanki() {
    return (
        <Text title={pageData.title} lastdate={pageData.lastdate} content={pageData.content} />
    );
}

export default HangulRomacaPyenhwanki;