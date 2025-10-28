import pageLayout from "../../../elements/pageLayout.js";


const pageList = [
];
const pageDataList = [
];
const currentDirectory = "/pages/dev/c/";
const category = "C";
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