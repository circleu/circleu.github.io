import pageLayout from "../../elements/pageLayout.js";
import testpage from "./testpage/pageData.js"


const pageList = [
testpage.name
];
const pageDataList = [
testpage
];
const currentDirectory = "/pages/study/";
const category = "공부";
let pages = ""
for (let i = 0; i < pageList.length; i++) {
    pages += pageLayout.putCategoryPageFrame(currentDirectory + pageList[i] + "/page.html", pageLayout.putCategoryPage(pageDataList[i].title, pageDataList[i].createTime, pageDataList[i].editTime));
}
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putCategoryHeader(category)}
        ${pages}
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {pages, text};