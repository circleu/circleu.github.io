import pageLayout from "../../../../elements/pageLayout.js";
import hyperlink from "../../../../elements/hyperlink.js";


const name = "c-highlighter";
const title = "C 코드 하이라이터";
const createTime = "2024-10-24 00:00";
const editTime = "2024-10-28 00:00";
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putPageHeader(title, createTime, editTime)}
        <h3>들어가는 글</h3>
        <p>본 사이트에서 사용할 C 코드 하이라이터입니다.</p>
        <p>하이라이터는 C로 작성되었고 하이라이트된 코드는 jsx 문법으로 출력됩니다.</p>
        <p>아래는 리포지토리 링크입니다:</p>
        ${hyperlink.putHyperlink("/elements/github-logo.png", "Github", "https://github.com/circleu/C-code-highlighter", "https://github.com/circleu/C-code-highlighter")}
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {name, title, createTime, editTime, text};