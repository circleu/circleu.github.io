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
        <p>${maths.mathsConvert("정규~분포의~확률~밀도~함수:~f(x|\\mu,\\sigma^{2})=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}")}</p>
        <p>${maths.mathsConvert("\\int_{-\\infty}^{\\infty}f(x)\\rm{d}x=1")}</p>
        <p>${maths.mathsConvert("반원:~y=\\sqrt{1-x^{2}}")}</p>
        <p>${maths.mathsConvert("이항~분포의~확률~밀도~함수:~f(x|n,p)=_{n}\\rm{C}_{x}p^{x}(1-p)^{n-x}~(x\\in\\mathbb{Z})")}</p>
        <p>${maths.mathsConvert("\\mathbb{N}=\\{1,2,3,\\cdots\\}")}</p>
        <p>${maths.mathsConvert("\\rm{Font~changed~to~Latin~Modern~Math.}")}</p>
        <p>${maths.mathsConvert("Test~sentence~for~line\\\\breaks.~It~works\\\\fine.")}</p>
        <p>${maths.mathsConvert("These~are~matrices:")}</p>
        <p>${maths.mathsConvert("A=\\left[\\begin{matrix}1&1&1\\\\1&-1&2\\\\2&0&3\\end{matrix}\\right],X=\\left[\\begin{matrix}x_{1}\\\\x_{2}\\\\x_{3}\\end{matrix}\\right]")}</p>
        <p>${maths.mathsConvert("\\bf{v}=\\left[\\begin{matrix}v_{1}\\\\v_{2}\\\\v_{3}\\\\ \\vdots\\end{matrix}\\right]")}</p>
        <p>${maths.mathsConvert("\\rm{아직~pmatrix,~bmatrix~등은~구현하지~않음.}")}</p>
        <p>${maths.mathsConvert("\\overset{~}{\\underset{\\small{n\\rightarrow\\infty}}{\\lim}}\\overset{\\small{n}}{\\underset{\\small{k=1}}{\\sum}}a_{k}")}</p>
        <p>${maths.mathsConvert("y=\\overset{\\small{n}}{\\underset{\\small{i=1}}{\\sum}}a_{i}x_{i}+b")}</p>

        <p>${maths.mathsConvert("y_{i}'=ax_{i}+b")}</p>
        <p>${maths.mathsConvert("S=\\overset{\\small{n}}{\\underset{\\small{i=1}}{\\sum}}(y_{i}-(ax_{i}+b))^{2}")}</p>
        <p>${maths.mathsConvert("\\frac{\\rm{d}S}{\\rm{d}a}=-2\\sum x_{i}(y_{i}-(ax_{i}+b))=0")}</p>
        <p>${maths.mathsConvert("\\frac{\\rm{d}S}{\\rm{d}b}=-2\\sum(y_{i}-(ax_{i}+b))=0")}</p>
        <p>${maths.mathsConvert("a\\sum x_{i}^{2}+b\\sum x_{i}=\\sum x_{i}y_{i}")}</p>
        <p>${maths.mathsConvert("a\\sum x_{i}+nb=\\sum y_{i}")}</p>
        <p>${maths.mathsConvert("a=\\frac{n\\sum x_{i}y_{i}-\\sum x_{i}\\sum y_{i}}{n\\sum x_{i}^{2}-(\\sum x_{i})^{2}}")}</p>
        <p>${maths.mathsConvert("b=\\frac{\\sum y_{i}-a\\sum x_{i}}{n}")}</p>
        
        <p>${maths.mathsConvert("\\bf{X}=\\left[\\begin{matrix}1&x_{11}&x_{12}&x_{13}&\\cdots\\\\1&x_{21}&x_{22}&x_{23}&\\cdots\\\\1&x_{31}&x_{32}&x_{33}&\\cdots\\\\\\vdots& \\vdots & \\vdots & \\vdots& \\ddots\\end{matrix}\\right], \\bf{y}=\\left[\\begin{matrix}y_{1}\\\\y_{2}\\\\y_{3}\\\\\\vdots\\end{matrix}\\right]")}</p>
        <p>${maths.mathsConvert("\\bf{a}=\\left[\\begin{matrix}b\\\\a_{1}\\\\a_{2}\\\\\\vdots\\end{matrix}\\right]")}</p>
        <p>${maths.mathsConvert("\\bf{a}=(\\bf{X}^{T}\\bf{X})^{-1}\\bf{X}^{T}\\bf{y}")}</p>
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {name, title, createTime, editTime, text};