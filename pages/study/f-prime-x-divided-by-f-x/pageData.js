import pageLayout from "../../../elements/pageLayout.js";
import maths from "../../../elements/maths.js";


const name = "f-prime-x-divided-by-f-x";
const title = "f'(x)/f(x) = (f(x)의 인수들의 역수를 합한 값)";
const createTime = "2025-03-18 00:00";
const editTime = "2025-08-28 20:20";
const text =  
`<div id="main-frame">
    <div id="main-text">
        ${pageLayout.putPageHeader(title, createTime, editTime)}
        <h3>들어가는 글</h3>
        <del><p>기존 글을 갈아 엎고 다시 쓴 글...</p></del>
        <p>최근 수학II에서 배웠던 미분을 갖고 놀다가 재밌는 것을 발견했습니다.</p>
        <p>다항함수 ${maths.putMaths("f(x)")}를 ${maths.putMaths("x")}에 대하여 미분한 식을 ${maths.putMaths("f'(x)")}라 하면, ${maths.putMaths("\\frac{f'(x)}{f(x)}=(f(x)의~인수들의~역수를~합한~값)")}이 되는 것을 발견했습니다.</p>
        <p>대강 아래와 같이 됩니다:</p>
        <p>${maths.putMaths("함수~f(x)=(x-1)(x-3)(x-5)라~할~때,")} ${maths.putMaths("\\frac{f\'(x)}{f(x)}=\\frac{1}{x-1}+\\frac{1}{x-3}+\\frac{1}{x-5}")}</p>

        <h3>왜 저럼?</h3>
        <p>그럼 왜 저리 되는지 알아 봅시다.</p>
        <p>첫 번째 방법은 수학II 과정만으로도 증명 가능합니다. 곱의 미분법만 알면 됩니다.</p>
        <p>${maths.putMaths("곱의~미분법:")}</p>
        <p>${maths.putMaths("함수~f(x)=a(x-b_{1})(x-b_{2})(x-b_{3})\\cdots 라~할~때,")}</p>
        <p>${maths.putMaths("f'(x)={a'(x-b_{1})(x-b_{2})(x-b_{3})\\cdots}+{a(x-b_{1})'(x-b_{2})(x-b_{3})\\cdots}+{a(x-b_{1})(x-b_{2})'(x-b_{3})\\cdots}+{a(x-b_{1})(x-b_{2})(x-b_{3})'\\cdots}+\\cdots")}</p>
        <p>${maths.putMaths("~~~~~={a(x-b_{2})(x-b_{3})\\cdots}+{a(x-b_{1})(x-b_{3})\\cdots}+{a(x-b_{1})(x-b_{2})\\cdots}+\\cdots")}</p>
        <p>곱의 미분법을 이용하여 증명해 봅시다.</p>
        <div class="maths-frame">
          <MathsExpression x={"함수~f(x)=a(x-b_{1})(x-b_{2})(x-b_{3})\\cdots~라~할~때,"}/>
          <MathsExpression x={"f'(x)={a(x-b_{2})(x-b_{3})\\cdots} + {a(x-b_{1})(x-b_{3})\\cdots} + {a(x-b_{1})(x-b_{2})\\cdots} + \\cdots"}/>
          <MathsExpression x={"\\therefore\\frac{f'(x)}{f(x)}=\\frac{{a(x-b_{2})(x-b_{3})\\cdots} + {a(x-b_{1})(x-b_{3})\\cdots} + {a(x-b_{1})(x-b_{2})\\cdots} + \\cdots}{a(x-b_{1})(x-b_{2})(x-b_{3})\\cdots}"}/>
          <MathsExpression x={"~~~~~~~~~~~~~=\\frac{1}{x-b_{1}} + \\frac{1}{x-b_{2}} + \\frac{1}{x-b_{3}} + \\cdots"}/>
        </div>
        <p>증명 성공!</p>
        <p>두 번째 방법은 미적분 내용이 들어갑니다. 조금 돌아가는 느낌이 있지만 재밌습니다.</p>
        <p>먼저 자연로그가 뭔지 알아야 합니다.</p>
        <div class="maths-frame">
          <MathsExpression x={"자연로그~\\rm{ln}~x는~e=\\lim{x}{\\infty}\\left1+\\frac{1}{x}\\right^{x}를~밑으로~하는~로그이다."}/>
          <MathsExpression x={"\\Rightarrow~\\rm{ln}~x=\\rm{log}_{e}~x"}/>
        </div>
        <p>자연로그에는 재밌는 성질이 있는데, 미분하면 진수의 역수가 나옵니다. 증명해 보겠습니다.</p>
        <div class="maths-frame">
          <MathsExpression x={"f(x)=\\rm{ln}(x-a)라~하면"}/>
          <MathsExpression x={"f'(x)=\\lim{h}{0}\\frac{\\rm{ln}(x+h-a)-\\rm{ln}(x-a)}{h}"}/>
          <MathsExpression x={"~~~~~~~~=\\lim{h}{0}\\frac{\\rm{ln}\\left\\frac{x+h-a}{x-a}\\right}{h}"}/>
          <MathsExpression x={"~~~~~~~~=\\lim{h}{0}\\frac{\\rm{ln}\\left1+\\frac{h}{x-a}\\right}{\\frac{h}{x-a}}\\times\\frac{1}{x-a}"}/>
          <MathsExpression x={"~~~~~~~~=\\lim{h}{0}\\rm{ln}\\left1+\\frac{h}{x-a}\\right^{\\frac{x-a}{h}}\\times\\frac{1}{x-a}"}/>
          <MathsExpression x={"~~~~~~~~=\\rm{ln}e\\times\\frac{1}{x-a} = \\frac{1}{x-a}"}/>
        </div>
        <p>그러면 이제 <span class="maths-line"><MathsExpression x={"\\frac{f'(x)}{f(x)}"}/></span>에 대해서도 증명해 봅시다.</p>
        <div class="maths-frame">
          <MathsExpression x={"f(x) = a(x-b_{1})(x-b_{2})(x-b_{3})\\cdots~라~할~때,"}/>
          <MathsExpression x={"{\\rm{ln}~f(x)}'={\\rm{ln}~f(x)}'\\times~f'(x)=\\frac{f'(x)}{f(x)}"}/>
          <MathsExpression x={"또,~{\\rm{ln}~f(x)}'={\\rm{ln}(a) + \\rm{ln}(x-b_{1})+ \\rm{ln}(x-b_{2})+ \\rm{ln}(x-b_{3})+\\cdots}'"}/>
          <MathsExpression x={"~~~~~~~~~~~~~~~~~~~~~~=\\frac{1}{x-b_{1}} + \\frac{1}{x-b_{2}} + \\frac{1}{x-b_{3}} + \\cdots"}/>
          <MathsExpression x={"\\therefore\\frac{f'(x)}{f(x)}=\\frac{1}{x-b_{1}} + \\frac{1}{x-b_{2}} + \\frac{1}{x-b_{3}} + \\cdots"}/>
        </div>
        <h3>마치는 글</h3>
        <p>다항함수 <span class="maths-line"><MathsExpression x={"f(x)"}/></span>를 <span class="maths-line"><MathsExpression x={"x"}/></span>에 대하여 미분한 식을 <span class="maths-line"><MathsExpression x={"f'(x)"}/></span>라 했을 때, <span class="maths-line"><MathsExpression x={"\\frac{f'(x)}{f(x)}=(f(x)의~인수들의~역수를~합한~값)"}/></span>이 되는 이유에 대해 탐구해 봤습니다.</p>
        <p>이전 글을 다시 쓰면서 수식 관련 코드도 고치고 배운 내용도 복습하고 좋았습니다.</p>
        <p>이전에는 Element를 직접 작성하는 방식이었는데 이제는 Latex 문법으로 작성 가능하니 훨 편하고 좋네요.</p>
        <p>이 글 처음 쓸 당시에는 수2 배우고 있었는데 이젠 미적분 배우네요. 시간 참 빠릅니다...</p>
        ${pageLayout.putPageFooter()}
    </div>
</div>`;


export default {name, title, createTime, editTime, text};