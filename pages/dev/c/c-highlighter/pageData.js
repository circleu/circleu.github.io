import pageLayout from "../../../../elements/pageLayout.js";
import hyperlink from "../../../../elements/hyperlink.js";


const name = "c-highlighter";
const title = "C 코드 하이라이터";
const createTime = "2024-10-24 00:00";
const editTime = "2025-08-29 17:20";
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putPageHeader(title, createTime, editTime)}
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {name, title, createTime, editTime, text};
