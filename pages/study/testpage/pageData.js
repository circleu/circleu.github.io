import pageLayout from "../../../elements/pageLayout.js";
import maths from "../../../elements/maths.js"


const name = "testpage";
const title = "testpage";
const createTime = "1970-01-01 00:00";
const editTime = "1970-01-01 00:00";
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putPageHeader(title, createTime, editTime)}
        <h3>들어가는 글</h3>
        <p>이 글은 테스트 용입니다. 새로운 기능을 구현하거나 글을 임시로 저장할 적에 사용합니다.</p>
        <p>${maths.mathsConvert("현재~\\rm{LaTeX}~문법을~이용하여~수식을~입력하는~기능을~구현~중입니다.")}</p>
        <p>${maths.mathsConvert("아래는~테스트용~수식입니다.")}</p>
        <p>${maths.mathsConvert("정규~분포의~확률~밀도~함수:~f(x)=\\frac{1}{\\sqrt{2\\pi}\\sigma}\\rm{exp}\\left[-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}\\right]")}</p>
        <p>${maths.mathsConvert("\\int_{-\\infty}^{\\infty}f(x)\\rm{d}x=1")}</p>
        <p>${maths.mathsConvert("반원:~y=\\sqrt{1-x^{2}}")}</p>
        <p>${maths.mathsConvert("윗~첨자와~아랫~첨자를~같은~수직선상에~두고~싶은데~어떻게~구현해야~할까요\\cdots")}</p>
        <p>${maths.mathsConvert("제곱근도~엉망입니다\\cdots")}</p>
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {name, title, createTime, editTime, text};