import pageLayout from "./elements/pageLayout.js";
import hyperlink from "./elements/hyperlink.js";


const title = "처음 화면";
const createTime = "2024-04-06 00:00";
const editTime = "2025-08-27 01:23";
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putPageHeader(title, createTime, editTime)}
        <h3>사이트에 대해</h3>
        <p>그냥 이것저것 만들어 보며 공부한 것을 올리는 곳입니다.</p>
        <p>그르거나, 비효율적이거나 가독성이 떨어지는 코드들이 있을 수 있습니다.</p>
  
        <h3>본인에 대해</h3>
        <p>운영체제를 공부 중입니다. 덕분에 C를 열심히 배우고 있습니다.</p>
        
        <h3>외부 링크</h3>
        <p>${hyperlink.putHyperlink("/elements/github-logo.png", "Github", "https://github.com/circleu", "https://github.com/circleu")}</p>
        <p>${hyperlink.putHyperlink("/elements/email-icon.jpg", "e-mail", "mailto:shanwdev25@gmail.com", "shawndev25@gmail.com")}</p>

        <h3>Site Info</h3>
        <p>This site is made by circleu.</p>
        <p>Some images, including e-mail icon, etc., came from <a class="link" href="https://www.vecteezy.com">vecteezy.com</a>.</p>
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {title, createTime, editTime, text};