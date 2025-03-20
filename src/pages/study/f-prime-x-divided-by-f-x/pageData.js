import React from "react";
import Text from "../../../elements/Text";
import {MathsFrac, MathsItalic, MathsNormal, MathsPunct, MathsLim, MathsParen, MathsSup, MathsSub} from "../../../elements/Maths"
import Image00 from "./img00.png"
import Image01 from "./img01.png"
import Image02 from "./img02.png"


const FPrimeXDividedByFX = {
  data: {
    title: "f`(x)/f(x)의 결과가 f(x)의 인수들의 역수를 합한 값이 되는 이유에 관한 탐구",
    createdate: "2025-03-18",
    editdate: "2025-03-21",
    dir: "/study/f-prime-x-divided-by-f-x",
    content: (
      <div>
        <h3>들어가는 글</h3>
        <p>할 짓이 없어 최근 수학II에서 배웠던 다항함수의 미분을 가지고 놀다가 재밌는 것을 발견했다.</p>
        <p>
          최고차항의 계수가 1인 다항함수를 f(x)라 할 때, f(x)를 x에 대하여 미분한 식을 f`(x)라 하면, f`(x)/f(x)의 결과가 f(x)의 인수들의 역수를 합한 값이 된다.
          (최고차항의 계수가 1이 아니어도 성립하는지는 모르겠다. 알아 보기 귀찮다.)
        </p>
        <p>아래는 예이다:</p>
        <div className="maths-frame">
          <div className="maths-body">
            <MathsNormal x="함수"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="1"/>
            <MathsPunct x=")"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="3"/>
            <MathsPunct x=")"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="5"/>
            <MathsPunct x=")"/>
            <MathsNormal x="라 할 때,"/>
          </div>
          <div className="maths-body">
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsNormal x="를"/>
            <MathsItalic x="x"/>
            <MathsNormal x="에 대하여 미분한 식을"/>
            <MathsItalic x="f`"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsNormal x="라 하면"/>
          </div>
          <div className="maths-body">
            <MathsFrac x1={<span><MathsItalic x="f`"/><MathsPunct x="("/><MathsItalic x="x"/><MathsPunct x=")"/></span>} x2={<span><MathsItalic x="f"/><MathsPunct x="("/><MathsItalic x="x"/><MathsPunct x=")"/></span>}/>
            <MathsPunct x="="/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="1"/></span>}/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="3"/></span>}/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="5"/></span>}/>
          </div>
        </div>
        <p>갓 미분을 배운 나로서는 왜 이런 결과가 나오는지 단번에 알아차릴 수가 없어 이에 관한 탐구를 진행하고자 한다.</p>

        <h3>조사</h3>
        <p>먼저 우리의 똑똑한 친구 ChatGPT에게 물어보자.</p>
        <img src={Image00} alt="img00.png"/>
        <img src={Image01} alt="img01.png"/>
        <img src={Image02} alt="img02.png"/>
        <p>오, 굉장히 깔끔하게 답이 나온다.</p>
        <p>
          여러 다항식이 곱해진 함수를 미분하면, 어떠한 항의 도함수를 구하고 그 식을 나머지 항과 곱하는 과정을 반복하여 나온 결과를 모두 더하면 되니 셋째 사진의 '미분하기'와 같은 식이 나오고, 
          이를 f(x)로 나누면 미분하여 사라진(항이 x의 계수가 1인 일차식이기 때문) 항을 제외한 나머지 항이 약분되기 때문에 결과가 인수의 역수의 합이 된다.
        </p>
        <p>셋째 사진 맨 아래의 식은 GPT가 친절하게 부분합으로 단순화하여 준 식의 모습이다.</p>
        <p>원리도 생각보다 간단하고 GPT가 설명을 너무 잘해 줘서 더 조사할 게 없을 듯하지만... 조금만 더 조사하여 보자.</p>
        <p>찾아 보니, '자연로그' 함수를 미분하면 진수의 역수가 나오고, 이를 이용하여 f`(x)/f(x)의 결과를 유도할 수 있음을 알았다. 그렇다면 '자연로그'는 무엇인가?</p>
        <div className="maths-frame">
          <div className="maths-body">
            <MathsNormal x="자연로그 ln"/>
            <MathsItalic x="x"/>
            <MathsNormal x="는 무리수"/>
            <MathsItalic x="e"/>
            <MathsPunct x="="/>
            <MathsLim x1={<MathsItalic x="x"/>} x2={<MathsNormal x="∞"/>}/>
            <MathsParen dir={0}/>
            <MathsNormal x="1"/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x={"1"}/></span>} x2={<span><MathsItalic x="x"/></span>}/>
            <MathsParen dir={1}/>
            <MathsSup x={<MathsItalic x="x"/>}/>
            <MathsNormal x="를 밑으로 하는 로그, 즉, log"/>
            <MathsSub x={<MathsItalic x="e"/>}/>
            <MathsItalic x="x"/>
            <MathsNormal x="이다."/>
          </div>
        </div>
        <p>그렇다고 한다...</p>
        <p>그러면 왜 자연로그 함수를 미분하면 진수의 역수가 나오는가 증명하여 보자. 이는 도함수의 정의를 이용하면 간단히게 증명할 수 있다.</p>
        <div className="maths-frame">
          <div className="maths-body">
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsNormal x="ln"/>
            <MathsItalic x="x"/>
            <MathsNormal x="라 하면"/>
          </div>
          <div className="maths-body">
            <MathsItalic x="f`"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsLim x1={<MathsItalic x="h"/>} x2={<MathsNormal x="0"/>}/>
            <MathsFrac 
              x1={
                <span>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x="+"/>
                  <MathsItalic x="h"/>
                  <MathsPunct x=")"/>
                  <MathsPunct x="-"/>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="h"/>
                </span>
              }
            />
          </div>
          <div className="maths-body">
            <MathsPunct x="="/>
            <MathsLim x1={<MathsItalic x="h"/>} x2={<MathsNormal x="0"/>}/>
            <MathsFrac
              x1={
                <span>
                  <MathsItalic x="f"/>
                  <MathsParen dir={0}/>
                  <MathsFrac
                    x1={
                      <span>
                        <MathsItalic x="x"/>
                        <MathsPunct x="+"/>
                        <MathsItalic x="h"/>
                      </span>
                    }
                    x2={
                      <span>
                        <MathsItalic x="x"/>
                      </span>
                    }
                  />
                  <MathsParen dir={1}/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="h"/>
                </span>
              }
            />
          </div>
          <div className="maths-body">
            <MathsPunct x="="/>
            <MathsLim x1={<MathsItalic x="h"/>} x2={<MathsNormal x="0"/>}/>
            <MathsFrac
              x1={
                <span>
                  <MathsNormal x="ln"/>
                  <MathsParen dir={0}/>
                  <MathsNormal x="1"/>
                  <MathsPunct x="+"/>
                  <MathsFrac
                    x1={
                      <span>
                        <MathsItalic x="h"/>
                      </span>
                    }
                    x2={
                      <span>
                        <MathsItalic x="x"/>
                      </span>
                    }
                  />
                  <MathsParen dir={1}/>
                </span>
              }
              x2={
                <span>
                  <MathsFrac
                    x1={
                      <span>
                        <MathsItalic x="h"/>
                      </span>
                    }
                    x2={
                      <span>
                        <MathsItalic x="x"/>
                      </span>
                    }
                  />
                </span>
              }
            />
            <MathsPunct x="×"/>
            <MathsFrac
              x1={
                <span>
                  <MathsNormal x="1"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="x"/>
                </span>
              }
            />
          </div>
          <div className="maths-body">
            <MathsPunct x="="/>
            <MathsLim x1={<MathsItalic x="h"/>} x2={<MathsNormal x="0"/>}/>
            <MathsNormal x="ln"/>
            <MathsParen dir={0}/>
            <MathsNormal x="1"/>
            <MathsPunct x="+"/>
            <MathsFrac
              x1={
                <span>
                  <MathsItalic x="h"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="x"/>
                </span>
              }
            />
            <MathsParen dir={1}/>
            <MathsSup
              x={
                <span>
                  <MathsFrac
                    x1={
                      <span>
                        <MathsItalic x="x"/>
                      </span>
                    }
                    x2={
                      <span>
                        <MathsItalic x="h"/>
                      </span>
                    }
                  />
                </span>
              }
            />
            <MathsPunct x="×"/>
            <MathsFrac
              x1={
                <span>
                  <MathsNormal x="1"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="x"/>
                </span>
              }
            />
          </div>
          <div className="maths-body">
            <MathsNormal x="여기서 무리수"/>
            <MathsItalic x="e"/>
            <MathsItalic x="의 정의를 이용하면"/>
          </div>
          <div className="maths-body">      
            <MathsPunct x="="/>
            <MathsNormal x="ln"/>
            <MathsItalic x="e"/>
            <MathsPunct x="×"/>
            <MathsFrac
              x1={
                <span>
                  <MathsNormal x="1"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="x"/>
                </span>
              }
            />
            <MathsPunct x="="/>
            <MathsFrac
              x1={
                <span>
                  <MathsNormal x="1"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="x"/>
                </span>
              }
            />
          </div>
        </div>
        <p>
          무리수 e의 정의를 이용하는 부분은 자연로그의 진수 자리에 있는 h/x와 지수 자리에 있는 x/h를 잘 보면 된다. 
          h가 0으로 가서 h/x는 무한소, x/h는 무한대이므로 자연로그의 밑 e의 정의와 같음을 알 수 있다.
        </p>
        <p>그러면 이제 f`(x)/f(x)를 자연로그를 사용하여 표현해 보자.</p>
        <div className="maths-frame">
          <div className="maths-body">
            <MathsNormal x="먼저"/>
            <MathsPunct x="["/>
            <MathsNormal x="ln"/>
            <MathsPunct x="{"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsPunct x="]"/>
            <MathsNormal x="`"/>
            <MathsPunct x="="/>
            <MathsFrac
              x1={
                <span>
                  <MathsItalic x="f`"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
            />
            <MathsNormal x="임을 밝히자."/>
          </div>
          <div className="maths-body">&nbsp;</div>
          <div className="maths-body">
          <MathsNormal x="함수"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="1"/>
            <MathsPunct x=")"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="3"/>
            <MathsPunct x=")"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="5"/>
            <MathsPunct x=")"/>
            <MathsNormal x=","/>
          </div>
          <div className="maths-body">
            <MathsNormal x="함수"/>
            <MathsItalic x="h"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsNormal x="ln"/>
            <MathsPunct x="{"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsNormal x="라 하면"/>
          </div>
          <div className="maths-body">
            <MathsItalic x="h`"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsPunct x="["/>
            <MathsNormal x="ln"/>
            <MathsPunct x="{"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsPunct x="]"/>
            <MathsNormal x="`"/>
            <MathsPunct x="×"/>
            <MathsItalic x="f`"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
          </div>
          <div className="maths-body">
            <MathsPunct x="="/>
            <MathsFrac
              x1={
                <span>
                  <MathsNormal x="1"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
            />
            <MathsPunct x="×"/>
            <MathsItalic x="f`"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsFrac
              x1={
                <span>
                  <MathsItalic x="f`"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
            />
          </div>
          <div className="maths-body">
            <MathsNormal x="따라서"/>
            <MathsPunct x="["/>
            <MathsNormal x="ln"/>
            <MathsPunct x="{"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsPunct x="]"/>
            <MathsNormal x="`"/>
            <MathsPunct x="="/>
            <MathsFrac
              x1={
                <span>
                  <MathsItalic x="f`"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
            />
            <MathsNormal x="임을 알 수 있다."/>
          </div>
          <div className="maths-body">
            <MathsNormal x="또,"/>
            <MathsItalic x="h`"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="="/>
            <MathsPunct x="["/>
            <MathsNormal x="ln"/>
            <MathsPunct x="{"/>
            <MathsItalic x="f"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsPunct x="]"/>
            <MathsNormal x="`"/>
          </div>
          <div className="maths-body">
            <MathsPunct x="="/>
            <MathsPunct x="{"/>
            <MathsNormal x="ln"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="1"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsNormal x="`"/>
            <MathsPunct x="+"/>
            <MathsPunct x="{"/>
            <MathsNormal x="ln"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="3"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsNormal x="`"/>
            <MathsPunct x="+"/>
            <MathsPunct x="{"/>
            <MathsNormal x="ln"/>
            <MathsPunct x="("/>
            <MathsItalic x="x"/>
            <MathsPunct x="-"/>
            <MathsNormal x="5"/>
            <MathsPunct x=")"/>
            <MathsPunct x="}"/>
            <MathsNormal x="`"/>
            <MathsPunct x="="/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="1"/></span>}/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="3"/></span>}/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="5"/></span>}/>
            <MathsNormal x="이므로"/>
          </div>
          <div className="maths-body">
            <MathsFrac
              x1={
                <span>
                  <MathsItalic x="f`"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
              x2={
                <span>
                  <MathsItalic x="f"/>
                  <MathsPunct x="("/>
                  <MathsItalic x="x"/>
                  <MathsPunct x=")"/>
                </span>
              }
            />
            <MathsPunct x="="/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="1"/></span>}/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="3"/></span>}/>
            <MathsPunct x="+"/>
            <MathsFrac x1={<span><MathsNormal x="1"/></span>} x2={<span><MathsItalic x="x"/><MathsPunct x="-"/><MathsNormal x="5"/></span>}/>
            <MathsNormal x="임을 알 수 있다."/>
          </div>
        </div>
        <p>아주 만족스럽다. 일반화를 하면 더 좋겠지만 귀찮으니 여기까지만 하겠다.</p>
        <p>
          그리고 계산하다가 알게 된 건데, 최고차항의 계수도 다른 인수들 처럼 역수가 되서 더해진다.
          이는 조금만 생각해 보면 알 수 있다.
          방금한 자연로그를 통한 증명을 이용해 설명하면, 로그의 진수에서의 곱은 각각의 로그의 합으로 표현할 수 있으니 최고차항의 계수도 로그의 합으로 나눠지므로 역수가 되어 더해지는 건 당연한 얘기라 할 수 있겠다.
        </p>
        <h3>마치는 글</h3>
        <p>본 탐구를 통하여 두 가지의 증명 방법을 알았다. 첫째가 생긴 그대로 도함수와 본 함수의 연산을 통한 증명, 둘째가 자연로그를 통한 증명이다.</p>
        <p>두 증명 모두 꽤 간단하나 개인적으로는 자연로그의 미분을 이용한 증명이 더 생각할 거리가 많아 좋았던 것 같다.</p>
        <p>본 탐구를 통해 다항함수의 미분을 복습할 수 있었고, 상위 과목인 미적분에서 등장하는 자연로그와 그의 미분법에 대해 알 수 있었기에 학습 목적으로도 큰 도움이 되었다.</p>
        <p>
          첫 공부 글, 그 중에서도 첫 수학 공부 글이었는데, 아무래도 이런 식의 글은 처음 써보다 보니 가독성도 별로인 것 같고, 설명도 쓸 데 없이 복잡한 것 같고, 뭐... 그냥 별로다.
          수식 기능도 마음에 안든다. 갈아 엎어야 될 것 같다.
          이 글을 작성하면서 필요한 기능을 하나씩 만들어 쓰다보니 좀 중구난방이 됐고, 
          작성 방식이 노가다식이어서 시간이 오래 걸린다. 이렇게 며칠씩이나 들이며 쓸만한 글은 아니었는데... 조금 아쉽다. 다음 글은 좀 더 괜찮은 글이 됐으면 좋겠다.
        </p>
      </div>
    )
  },
  
  page: function () {
    return (
      <Text title={FPrimeXDividedByFX.data.title} createdate={FPrimeXDividedByFX.data.createdate} editdate={FPrimeXDividedByFX.data.editdate} content={FPrimeXDividedByFX.data.content}/>
    );
  }  
}

export default FPrimeXDividedByFX;