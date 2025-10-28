import sidebar from "../../../elements/sidebar.js";
import pageData from "./pageData.js";
import maths from "../../../elements/maths.js"


document.body.innerHTML += sidebar.sidebar;
document.body.innerHTML += pageData.text;
maths.mathsSetting()