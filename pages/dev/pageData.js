import pageLayout from "../../elements/pageLayout.js";
import pages_dev_c from "./c/pageData.js"
import pages_dev_os from "./os/pageData.js"


const pageList = [
    
];
const pageDataList = [
    
];
const currentDirectory = "/pages/dev/";
const category = "개발";
let pages = ""
for (let i = 0; i < pageList.length; i++) {
    pages += pageLayout.putCategoryPageFrame(currentDirectory + pageList[i] + "/page.html", pageLayout.putCategoryPage(pageDataList[i].title, pageDataList[i].createTime, pageDataList[i].editTime));
}
pages += pages_dev_c.pages;
pages += pages_dev_os.pages;
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putCategoryHeader(category)}
        ${pages}
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {pages, text};